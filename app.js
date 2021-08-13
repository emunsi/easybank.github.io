const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    //const header = document.querySelector('.bg');

    burger.addEventListener('click', () => {
        //Toggel Animation
        nav.classList.toggle('nav-active');
        //Burger Animationen
        burger.classList.toggle('toggle');
        // Dunkler Hintergrund
        //header.classList.toggle('bg-active');
    });
}
const app = () => {
    navSlide();
}

app();