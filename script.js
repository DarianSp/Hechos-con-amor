// Esperamos a que cargue el DOM para evitar errores
document.addEventListener("DOMContentLoaded", () => {
    const slide = document.getElementById('slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let counter = 0;

    // Función para mover el carrusel
    function updateSlide() {
        // Multiplicamos el contador por -100 para desplazar las imágenes
        slide.style.transform = `translateX(${-100 * counter}%)`;
    }

    // Botón Siguiente
    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= images.length) {
            counter = 0; // Reinicia al principio
        }
        updateSlide();
    });

    // Botón Anterior
    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = images.length - 1; // Va al final
        }
        updateSlide();
    });

    // --- SOPORTE TÁCTIL (SWIPE) PARA CELULARES ---
    let touchStartX = 0;
    let touchEndX = 0;

    slide.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    slide.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    }, {passive: true});

    function handleGesture() {
        if (touchStartX - touchEndX > 50) {
            nextBtn.click(); // Deslizó a la izquierda
        }
        if (touchEndX - touchStartX > 50) {
            prevBtn.click(); // Deslizó a la derecha
        }
    }

    // Movimiento automático cada 5 segundos
    setInterval(() => {
        nextBtn.click();
    }, 5000);
});
