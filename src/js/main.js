// import gsap from "gsap";

import { initMenu } from "./mobile-menu";
import { animateNav } from "./animation";
import 'hover.css/css/hover-min.css';
import { loadSections } from "./loadSection";
import { setupScrollLine } from "./scroll-line.js";
import { textScrollAnimation } from "./text-scroll-animation.js";


document.addEventListener("DOMContentLoaded", async () => {
    console.log("loading `header.html`...");

    try {
        const response = await fetch('src/partials/header.html');
        const headerHTML = await response.text();
        const headerElement = document.getElementById('header');

        if (!headerElement) {
            console.error("header not found");
            return;
        }

        headerElement.innerHTML = headerHTML;
        console.log("Header is loaded!");

        initMenu();
    } catch (error) {
        console.error("something wrong, please again", error);
    }

    await loadSections();

    animateNav();
    setupScrollLine();
    textScrollAnimation();

});