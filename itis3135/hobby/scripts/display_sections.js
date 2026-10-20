const sections = Array.from(document.querySelectorAll(".page-section"));
const siteTitle = document.title;

function displaySection() {
    const sectionId = window.location.hash.slice(1);
    const selectedSection = sections.find((section) => section.id === sectionId)
        || sections.find((section) => section.id === "what");

    sections.forEach((section) => {
        section.style.display = section === selectedSection ? "block" : "none";
    });

    const sectionTitle = selectedSection.querySelector("h2").textContent;
    document.title = `${siteTitle} | ${sectionTitle}`;
}

window.addEventListener("hashchange", displaySection);
displaySection();