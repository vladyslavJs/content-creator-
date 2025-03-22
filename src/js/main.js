// // open and close mobile menu
// const mobileMenu = document.getElementById("mobile-menu");
// const openMenuBtn = document.querySelector(".burger-button-icon");
// const closeMenuBtn = document.querySelector(".close-button-icon");

// openMenuBtn.addEventListener("click", () => {
//     mobileMenu.classList.add("active");
// });

// closeMenuBtn.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
// });

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Завантаження `header.html`...");

    try {
        const response = await fetch('src/partials/header.html');
        const headerHTML = await response.text();
        const headerElement = document.getElementById('header');

        if (!headerElement) {
            console.error("Елемент #header не знайдено!");
            return;
        }

        headerElement.innerHTML = headerHTML;
        console.log("Header завантажений!");

        // Після вставки меню, ініціалізуємо його
        initMenu();
    } catch (error) {
        console.error("Помилка завантаження `header.html`:", error);
    }
});

function initMenu() {
    console.log("Ініціалізація меню...");

    const mobileMenu = document.getElementById("mobile-menu");
    const openMenuBtn = document.querySelector(".burger-button-icon");
    const closeMenuBtn = document.querySelector(".close-button-icon");

    if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
        console.error("Елементи меню не знайдені!");
        return;
    }

    openMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    console.log("Меню завантажено!");
}
