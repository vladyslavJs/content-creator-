import gsap from "gsap";

export function setupScrollLine() {
    gsap.to("#arrow-svg", {
        y: 4,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    const scrollLine = document.getElementById("scroll-line");

    if (!scrollLine) {
        console.warn("Scroll Line елемент не знайдено");
        return;
    }

    let lastScrollY = window.scrollY;
    const SCROLL_THRESHOLD = 10;

    // Початково показуємо
    scrollLine.classList.remove("hidden");

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - lastScrollY;

        if (Math.abs(diff) < SCROLL_THRESHOLD) return;

        if (diff > 0) {
            // Скрол вниз
            scrollLine.classList.add("hidden");
        } else {
            // Скрол вгору
            scrollLine.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    });
}
