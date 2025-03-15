// Плавная прокрутка к секциям
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Аккордеон для угроз
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});

// Слайдер для защиты данных
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
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

// Функция для проверки видимости секции
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * 0.8) && // Секция появляется, когда её верхняя часть на 80% видима
        rect.bottom >= 0
    );
}

// Функция для добавления класса "visible"
function handleScroll() {
    document.querySelectorAll('.section').forEach(section => {
        if (isSectionVisible(section)) {
            section.classList.add('visible');
        }
    });
}

// Отслеживаем прокрутку
window.addEventListener('scroll', handleScroll);

// Запускаем проверку при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});

document.addEventListener('scroll', () => {
    const mainContent = document.querySelector('.main-content');
    mainContent.style.animation = 'slideUp 1.5s ease-out forwards';
});