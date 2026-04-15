const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

function autoSlide() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 800}px)`;
}

setInterval(autoSlide, 3000);
