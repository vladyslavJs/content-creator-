import gsap from "gsap";

const images = [
    "src/assets/images/hero-image.JPG",
    "src/assets/images/hero-section.JPG",
    "src/assets/images/photographer.jpeg"
];

let currentIndex = 0;

export function showNextImage() {
    const sliderImage = document.getElementById("slider-image");

    if (!sliderImage) {
        console.warn("slider-image not found");
        return;
    }

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;

        const tl = gsap.timeline();

        tl.to(sliderImage, {
            duration: 1,
            opacity: 1,
            filter: "blur(8px)",
            ease: "power2.inOut",
            onComplete: () => {
                sliderImage.src = images[nextIndex];
            }
        });

        tl.to(sliderImage, {
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.inOut"
        });

        currentIndex = nextIndex;
    }, 3000);
}
