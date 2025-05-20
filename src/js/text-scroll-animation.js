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

    gsap.to(".portfolio-text", {
        scrollTrigger: {
            trigger: ".aboutme-section",
            start: "top 20%",
            end: "bottom top",
            scrub: true,
        },
    });

    gsap.from(".portfolio-first-text, .portfolio-second-text, .portfolio-third-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".portfolio-text",
            start: "top center",
            end: "bottom 80%",
            scrub: true,
        }
    });
}


export function findBlocksScrollAnimation() {
    const blocks = gsap.utils.toArray(".find-block");

    blocks.forEach((block, i) => {
        const adjustedIndex = i + 0;
        const endY = -adjustedIndex * 120;
        const rotation = i % 2 === 0 ? 8 : -8;

        block.style.zIndex = 50 - i * 2;
        block.style.position = "relative";

        gsap.to(block, {
            y: endY,
            rotate: rotation,
            scrollTrigger: {
                trigger: ".find-section",
                start: "top center",
                end: "bottom top",
                scrub: true,
            }
        });
    });
}

