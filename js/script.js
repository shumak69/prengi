const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.control__ul'),
    countries = document.querySelector('.header__countries'),
    link = document.querySelectorAll('.control__li');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    countries.classList.toggle('active');
    hamburger.classList.toggle('active');
});

link.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('active');
      countries.classList.remove('active');
      hamburger.classList.toggle('active');
    });
});

new WOW().init();

const slides = document.querySelectorAll('.tablet__slider-content'),
    next = document.querySelector('.tablet__slider-next'),
    prev = document.querySelector('.tablet__slider-prev'),
    tablet = document.querySelectorAll('.tablet__tab-items');
let currentSlide = 0;

function showContent() {
    slides.forEach(item => {
        item.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
    tablet.forEach(item => {
        item.classList.remove('active');
    });
    tablet[currentSlide].classList.add('active');
}

next.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentSlide == slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showContent();
});
prev.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentSlide == 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    showContent();
});

document.querySelector('.tablet__tab').addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('tablet__tab-items')) {
        tablet.forEach((item, i) => {
            if(e.target == item) {
                currentSlide = i;
                showContent();
            }
        });
    }
});


