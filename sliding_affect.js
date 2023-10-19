document.addEventListener("DOMContentLoaded", function () {
    const tiles = document.querySelectorAll(".tile");
    let currentIndex = 0;

    function showTile(index) {
        tiles.forEach((tile, i) => {
            if (i === index) {
                tile.classList.add("active");
            } else {
                tile.classList.remove("active");
            }
        });
    }

    function nextTile() {
        currentIndex = (currentIndex + 1) % tiles.length;
        showTile(currentIndex);
    }

    // Initial tile display
    showTile(currentIndex);

    // Automatically change tile every 4 seconds
    setInterval(nextTile, 4000);
});
