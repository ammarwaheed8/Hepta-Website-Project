/* Mobile Navbar + Hamburger Menu JS Scripting */
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu open/close
    hamburgerMenu.addEventListener('click', () => {
        const isOpen = hamburgerMenu.classList.toggle('open');
        navMenu.classList.toggle('open', isOpen);
    });

// Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });
});


// Video Play Model JS
const openPopup = document.getElementById('openPopup');
const videoPopup = document.getElementById('videoPopup');
const closePopup = document.getElementById('closePopup');

openPopup.addEventListener('click', function(event) {
    event.preventDefault();
    videoPopup.style.display = 'flex';
});

closePopup.addEventListener('click', function() {
    videoPopup.style.display = 'none';
    document.getElementById('videoPlayer').pause(); // Pause the video when closing
});


// Image Slider Model JS
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthitems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthitems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadslider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthitems;
    } else {
        active = active - 1;
    }
    reloadslider();
}

let autoslide = setInterval(() => { next.click(); }, 3000);

function reloadslider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastactiveDot = document.querySelector('.slider .dots li.active');
    if (lastactiveDot) lastactiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadslider();
    })
})

// Reveal on scroll Model JS
