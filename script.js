const menuToggle = document.querySelector('.menu-toggle input');

//script menu burger
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

//scroll smooth