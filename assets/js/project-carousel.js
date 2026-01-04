document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.indicator');

    let index = 0;

    function showSlide(i) {
        slides.forEach((s, idx) => s.style.display = idx === i ? 'block' : 'none');
        indicators.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
    }

    showSlide(index);

    nextBtn?.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn?.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    indicators.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            index = idx;
            showSlide(index);
        });
    });
});
