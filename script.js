const slide = document.getElementById('slide');
const images = document.querySelectorAll('.carousel-slide img');
let counter = 0;

function updateSlide() {
    slide.style.transform = `translateX(${-100 * counter}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
});

// Soporte para deslizar con el dedo (Swipe)
let touchStartX = 0;
slide.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
slide.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) document.getElementById('nextBtn').click();
    if (touchStartX - touchEndX < -50) document.getElementById('prevBtn').click();
});