document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const photos = document.querySelectorAll(".photo-grid img");

    function showNextPhoto() {
        // Oculta a foto atual
        photos[currentIndex].style.display = "none";
        
        // Incrementa o índice
        currentIndex = (currentIndex + 1) % photos.length;
        
        // Mostra a próxima foto
        photos[currentIndex].style.display = "block";
    }

    // Mostra apenas a primeira foto inicialmente
    photos.forEach((photo, index) => {
        if (index !== 0) {
            photo.style.display = "none";
        }
    });

    // Altera a foto a cada 3 segundos
    setInterval(showNextPhoto, 3000);
});
