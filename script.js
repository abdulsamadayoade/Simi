// MAKE NAVBAR DISAPPEAR WHEN A USER SCROLLS DOWN AND APPEAR WHEN A USER SCROLLS UP
// var prevScrollpos = window.pageYOffset;

// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-10rem";
//     }
//     prevScrollpos = currentScrollPos;
// }

// // MOBILE NAVIGATION MENU
// const mobileMenu = document.querySelector('.menu-toggle');
// const mobileList = document.querySelector('.nav-mobile .nav-list');

// mobileMenu.addEventListener('click', () => {
//     mobileMenu.classList.toggle('show');
//     mobileList.classList.toggle('show');
// });

// LOGIN AND SIGN UP SLIDER
const login = document.getElementById('login');
const register = document.getElementById('register');
const loginForm = document.getElementById('LoginForm');
const regForm = document.getElementById('RegForm');
const indicator = document.getElementById('Indicator');

login.addEventListener('click', function () {
    regForm.style.transform = 'translateX(300px)';
    loginForm.style.transform = 'translateX(300px)';
    indicator.style.transform = "translateX(0px)";
});

register.addEventListener('click', function () {
    regForm.style.transform = 'translateX(0px)';
    loginForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
});