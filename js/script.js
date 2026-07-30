/* =========================
   Z'S MOVING SERVICES
   SCRIPT.JS
========================= */


/* Mobile menu toggle */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {


    menuToggle.addEventListener("click", () => {


        navLinks.classList.toggle("active");


    });


}



/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {


        if (navLinks) {

            navLinks.classList.remove("active");

        }


    });


});
