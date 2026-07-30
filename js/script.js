// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Mobile Menu
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Scroll To Top
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (scrollBtn) {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
