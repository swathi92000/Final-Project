const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        const user = { username, password: hash };
        db.query('INSERT INTO mydb SET ?', user, (err) => {
            if (err) throw err;
            res.redirect('/login');
        });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) throw err;

        if (results.length === 1) {
            const user = results[0];

            // Compare the provided password with the stored hash
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;

                if (result) {
                    req.session.userId = user.id;
                    res.redirect('demo'); // Redirect to a dashboard page
                } else {
                    res.send('Incorrect password');
                }
            });
        } else {
            res.send('User not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
