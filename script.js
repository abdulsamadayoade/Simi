// MAKE NAVBAR DISAPPEAR WHEN A USER SCROLLS DOWN AND APPEAR WHEN A USER SCROLLS UP
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-10rem";
    }
    prevScrollpos = currentScrollPos;
}

// MOBILE NAVIGATION MENU
const mobileMenu = document.querySelector('.menu-toggle');
const mobileList = document.querySelector('.nav-mobile .nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    mobileList.classList.toggle('show');
});