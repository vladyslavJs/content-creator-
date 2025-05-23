import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateNav() {
    gsap.set(".nav-list-mobile-menu li", {
        x: -250,
        opacity: 0,
    });

    document.querySelector(".burger-button-icon").addEventListener("click", () => {
        document.getElementById("mobile-menu").classList.add("active");
        gsap.to(".nav-list-mobile-menu li", {
            x: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    });

    document.querySelector(".close-button-icon").addEventListener("click", () => {
        document.getElementById("mobile-menu").classList.remove("active");
        gsap.to(".nav-list-mobile-menu li", {
            opacity: 0,
            x: -250,
            duration: 1,
            stagger: 0.1,
            ease: "power2.in"
        });
    });
}

export function arrowAnimation() {
    gsap.to("#arrow-svg", {
        y: 4,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to("#icon-arrow-right", {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "elastic"
    });
}
