function requireAuth(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/login');
}

app.get('/dashboard', requireAuth, (req, res) => {
    res.sendFile(__dirname + 'demo.html');
});
