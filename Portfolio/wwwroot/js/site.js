// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Selecteer de knop
const backToTopButton = document.getElementById('backToTop');

// Luister naar scroll-evenementen
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Toon de knop als de gebruiker 300px naar beneden scrollt
        backToTopButton.classList.add('show');
    } else {
        // Verberg de knop als de gebruiker bovenaan is
        backToTopButton.classList.remove('show');
    }
});

// Scroll naar boven wanneer op de knop wordt geklikt
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Voeg vloeiende scroll toe
    });
});
