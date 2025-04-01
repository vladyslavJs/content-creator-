export function initMenu() {
    console.log("load menu...");

    const mobileMenu = document.getElementById("mobile-menu");
    const openMenuBtn = document.querySelector(".burger-button-icon");
    const closeMenuBtn = document.querySelector(".close-button-icon");

    if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
        console.error("elements not found");
        return;
    }

    openMenuBtn.addEventListener("click", () => {
        //visible menu begin animation
        mobileMenu.style.visibility = "visible";
        mobileMenu.classList.add("active");
    });

    closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    // event after end animation
    mobileMenu.addEventListener("transitionend", () => {
        if (!mobileMenu.classList.contains("active")) {
            mobileMenu.style.visibility = "hidden";
        }
    });

    console.log("menu is loaded");
}


