const images = [
    "src/assets/images/hero-image.JPG",
    "src/assets/images/hero-section.JPG",
    // "src/assets/images/photographer.jpeg"
];

let currentIndex = 0;

export function showNextImage() {
    const sliderImage = document.getElementById("slider-image");

    // Перевіряємо, чи елемент існує
    if (!sliderImage) {
        console.log("slider-image element not found");
        return;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;

        sliderImage.style.opacity = 0;

        setTimeout(() => {
            sliderImage.src = images[currentIndex];
            sliderImage.style.opacity = 1;
        }, 400);
    }, 4000);
}
