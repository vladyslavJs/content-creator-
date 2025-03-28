export async function loadSections() {
    console.log("Loading sections");

    const sections = document.querySelectorAll("[data-section]");

    for (const section of sections) {
        const sectionName = section.getAttribute("data-section");
        const filePath = `src/partials/${sectionName}.html`;

        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`error loading ${filePath}`);

            const html = await response.text();
            section.innerHTML = html;

            section.classList.add("loaded");

            console.log(`section is "${sectionName}" loaded!`);
        } catch (error) {
            console.error(`something wrong "${sectionName}.html":`, error);
        }
    }
}

