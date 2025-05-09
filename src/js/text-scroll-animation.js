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
            y: 150,
            opacity: 0,
            scale: 0.4,
        });

    // gsap.to(".portfolio-section", {
    //     scrollTrigger: {
    //         trigger: ".aboutme-section",
    //         start: "top 20%",
    //         end: "bottom top",
    //         scrub: true,
    //     },
    //     y: -450,
    // });
}

