// export function setupScrollLine() {
//     const mainSection = document.querySelector("main");
//     const scrollContainer = document.querySelector(".scroll-container");

//     if (!mainSection || !scrollContainer) {
//         console.warn("Not found element for Scroll or Line");
//         return;
//     }

//     //add .scroll-container after main
//     mainSection.insertAdjacentElement("afterend", scrollContainer);

//     let lastScrollY = window.scrollY;

//     //listening event
//     window.addEventListener("scroll", () => {
//         let currentScrolly = window.scrollY;

//         if (currentScrolly < lastScrollY) {
//             scrollContainer.classList.remove("hidden");
//         } else {
//             scrollContainer.classList.add("hidden");
//         }

//         lastScrollY = currentScrolly;
//     })
// }

// export function setupScrollLine() {
//     const mainSection = document.querySelector("main");
//     const scrollContainer = document.querySelector(".scroll-container");

//     if (!mainSection || !scrollContainer) {
//         console.warn("Не знайдено один з елементів для Scroll Line");
//         return;
//     }

//     // Переміщуємо .scroll-container після main
//     mainSection.insertAdjacentElement("afterend", scrollContainer);

//     let lastScrollY = window.scrollY;

//     window.addEventListener("scroll", () => {
//         let currentScrollY = window.scrollY;

//         if (currentScrollY < lastScrollY) {
//             scrollContainer.classList.remove("hidden"); // Показуємо при скролі вгору
//         } else {
//             scrollContainer.classList.add("hidden"); // Ховаємо при скролі вниз
//         }

//         lastScrollY = currentScrollY; // Оновлюємо значення для порівняння
//     });
// }
