/* ==========================================
   Z's Moving Services
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Navigation
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });

        });

    }

    /* ==========================
       Header Scroll Effect
    ========================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================
       Fade-In Animation
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .about-content, .gallery-grid img, .contact-wrapper"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("fade-up");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => observer.observe(element));

    /* ==========================
       Active Navigation Link
    ========================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

});
