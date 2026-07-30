/* =========================
   Z'S MOVING SERVICES
   SCRIPT.JS
========================= */


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if (menuToggle && navLinks) {


    menuToggle.addEventListener("click", function () {


        navLinks.classList.toggle("active");


    });


}




/* Close menu after selecting a page */


const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(function(item){


    item.addEventListener("click", function(){


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});
