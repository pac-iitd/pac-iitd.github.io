window.onload = function() {
    const navslide = () => {
        const burger = document.querySelector('.burger h1');
        const nav = document.querySelector('.nav-links');
        const head = document.querySelector('header');
        var scrollTop = $(window).scrollTop();
        elementOffset = $(".team").offset().top;
        distance = (elementOffset - scrollTop);
        console.log(distance);
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-links-active');
            if (distance > -40) {
                head.classList.toggle('header-active');
            }
            console.log("Hi");
        });
    }
    navslide();
}