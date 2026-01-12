const slide = document.getElementById('slide');
const images = document.querySelectorAll('.carousel-slide img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let counter = 0;
const size = 100; // Desplazamiento por cada imagen (100%)

function updateSlide() {
    slide.style.transform = `translateX(${-size * counter}%)`;
}

nextBtn.onclick = () => {
    counter = (counter + 1) % images.length;
    updateSlide();
};

prevBtn.onclick = () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
};

// --- SOPORTE TÁCTIL (SWIPE) ---
let touchStartX = 0;
slide.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
slide.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextBtn.click();
    if (touchStartX - touchEndX < -50) prevBtn.click();
});

// Carrusel automático lento (cada 5 segundos)
setInterval(() => {
    nextBtn.click();
}, 5000);
