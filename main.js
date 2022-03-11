/*=============== SHOW MENU ===============*/
const body = document.getElementById('body'),
    navMenu = document.getElementById('navbar-menu'),
    navbar = document.getElementById('navbar'),
    section = document.getElementById('section'),
    footer = document.getElementById('footer'),
    navToggle = document.getElementById('navbar-toggle'),
    navClose = document.getElementById('navbar-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show')
        navbar.classList.add('hide')
        section.classList.add('none')
        footer.classList.add('none')
        body.classList.add('deep-gray')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show')
        navbar.classList.remove('hide')
        section.classList.remove('none')
        footer.classList.remove('none')
        body.classList.remove('deep-gray')
    })
}