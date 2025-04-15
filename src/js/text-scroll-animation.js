import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function textScrollAnimation() {
    gsap.to(".about-text",
        {
            scrollTrigger: {
                trigger: ".aboutme-section",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
            y: -100,
            opacity: 0,
            scale: 1,
        });
    gsap.to(".portfolio-section", {
        scrollTrigger: {
            trigger: ".aboutme-section",
            start: "top 20%",
            end: "bottom top",
            scrub: true,
        },
        y: -450,
    });
}

