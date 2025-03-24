document.addEventListener("DOMContentLoaded", async () => {
    console.log("Завантаження `header.html`...");

    try {
        const response = await fetch('src/partials/header.html');
        const headerHTML = await response.text();
        const headerElement = document.getElementById('header');

        if (!headerElement) {
            console.error("header not found");
            return;
        }

        headerElement.innerHTML = headerHTML;
        console.log("Header завантажений!");

        // initialization menu
        initMenu();
    } catch (error) {
        console.error("something wrong", error);
    }
});

function initMenu() {
    console.log("load menu...");

    const mobileMenu = document.getElementById("mobile-menu");
    const openMenuBtn = document.querySelector(".burger-button-icon");
    const closeMenuBtn = document.querySelector(".close-button-icon");

    if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
        console.error("elements not found");
        return;
    }

    openMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
    console.log("Menu is loaded");
}


