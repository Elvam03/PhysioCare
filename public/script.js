document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#menu");
    const btns = document.querySelector("#btns");

    burger.addEventListener('click', () => {
        
        menu.classList.toggle('hidden');  
        menu.classList.toggle('block');   

        
        btns.classList.toggle('hidden');
    });
});


let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slidesToShow = 1; 


function showSlides() {
    slides.forEach((slide, index) => {
        if (index >= currentSlideIndex && index < currentSlideIndex + slidesToShow) {
            slide.style.display = "block"; 
        } else {
            slide.style.display = "none"; 
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    if (currentSlideIndex + slidesToShow > slides.length) {
        currentSlideIndex = 0;
    }
    showSlides();
}


function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - slidesToShow;
    }
    showSlides();
}


showSlides();

