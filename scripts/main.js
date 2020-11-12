document.addEventListener('DOMContentLoaded', () => {
    /*
     *
     *
     * DOM Elements
     *
     *
     */



    let slide = document.querySelector('.s1'); // First slide
    const next = document.getElementById('next'); // next btn
    const prev = document.getElementById('prev'); // previous btn
    const firstSlide = slide; // save the first slide
    let time = 5000;

    // =====================
    // Functions
    // =====================

    // Show next slide
    const nextSlide = () => {
        if (slide.nextElementSibling) {
            slide.classList.remove('display');
            slide = slide.nextElementSibling;
            slide.classList.add('display');
        } else {
            slide.classList.remove('display');
            slide = firstSlide;
            slide.classList.add('display');
        }
        time = 5000;
    }



    // Show previous slide
    const prevSlide = () => {
        if (slide.previousElementSibling) {
            slide.classList.remove('display');
            slide = slide.previousElementSibling;
            slide.classList.add('display');
        } else {
            slide.classList.remove('display');
            slide = firstSlide;
            slide.classList.add('display');
        }
        time = 5000;
    }


    // =================
    // Add Evenets
    // ================
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);


    // Change slides automatically 
    const intervalId = setInterval(() => {
        nextSlide();
    }, time);
})