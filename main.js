// do la posizione iniziale
let currentImage = 0;

// seleziono tutte le immagini attraverso il querySelectorAll
const images = document.querySelectorAll('.carousel-container img');

// do la classe active alla prima immagine dell'array
images[currentImage].classList.add('active');


document.querySelector('#nextBtn').addEventListener('click', function() {
    console.log('avanti');

    if (currentImage < images.length-1) {
    images[currentImage].classList.remove('active');
    currentImage++;
    images[currentImage].classList.add('active');
    }

});

document.querySelector('#prevBtn').addEventListener('click', function() {
    console.log('indietro');

    if (currentImage > 0) {
        images[currentImage].classList.remove('active');
        currentImage--;
        images[currentImage].classList.add('active');
    }
});