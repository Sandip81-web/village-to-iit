function showAbout() {
    const aboutSection = document.querySelector(".about");
    aboutSection.classList.remove("hidden");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
