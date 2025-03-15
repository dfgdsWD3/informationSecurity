// Открытие/закрытие меню на мобильных устройствах
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }
    });
});

// Слайдер для защиты данных
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i == index);
    });
}

document.getElementById('nextSlide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.getElementById('prevSlide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// Кнопка "Узнать больше"
document.getElementById('scrollButton').addEventListener('click', () => {
    document.querySelector('#importance').scrollIntoView({
        behavior: 'smooth'
    });
});

// Анимация появления секций
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * 0.8) &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    document.querySelectorAll('.section').forEach(section => {
        if (isSectionVisible(section)) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});

// Анимация аккордеона
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});
