// Perscorso immagini
//Si crea un array contenente i percorsi delle foto, in questo caso non sono link"
const imagesPath = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

// creo una stringa vuota per inserire le immagini nel DOM a ciclo finito
let imagesAdd = "";

// ciclo le immagini (imagesPath)
for (let i = 0; i < imagesPath.length; i++) {
    // salvo ogni percorso
    const imagePath = imagesPath[i];    

    // inserisco nella stringa vuota il codice html del singolo percorso all'atributo src 
    imagesAdd += `<img src="${imagePath}">`;
}
// si prende la stringa popolata e si stampa nel DOM il codice con l'immagine
document.querySelector('.carousel-container').innerHTML += imagesAdd;

// definisco una variabile, e si assegna l'index 0, impostando la prima immagine come attiva 
let currentImage = [0];     
// seleziono tutte le immagini attraverso il querySelectorAll che pesca i tag di tutte le immagini presenti nel container
const images = document.querySelectorAll('.carousel-container img');
// do la classe active (display: block) alla prima immagine dell'array, assegnando display: non a tute le altre
images[currentImage].classList.add('active');

// BOTTON UP 
document.querySelector('#nextBtn').addEventListener('click', function() {
    console.log('avanti');

    // 
    if (currentImage < images.length-1) {
        images[currentImage].classList.remove('active');
        currentImage++;
        images[currentImage].classList.add('active');
    } else if (currentImage == images.length-1) {
        images[currentImage].classList.remove('active');
        currentImage = [0];
        images[currentImage].classList.add('active');
    }

});

document.querySelector('#prevBtn').addEventListener('click', function() {
    console.log('indietro');

    if (currentImage > 0) {
        images[currentImage].classList.remove('active');
        currentImage--;
        images[currentImage].classList.add('active');
    } else if (currentImage == 0) {
        images[currentImage].classList.remove('active');
        currentImage = images.length-1;
        images[currentImage].classList.add('active');
    }
});