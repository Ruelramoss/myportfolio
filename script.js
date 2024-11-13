// Select toggle button and navigation links
const togglebtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

// Toggle navbar visibility when the toggle button is clicked
togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Handle link click effect inside the navbar
const navLinks = document.querySelectorAll(".navlinks li a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default jump behavior

        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
        nav.classList.remove("open");
        togglebtn.classList.remove("click");

        // Smooth scroll to the target section
        const targetId = this.getAttribute("href").substring(1); // Get ID without '#'
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Typed.js for typing text effect
new Typed(".input", {
    strings: ["Coding Enthusiast!", "Computer Science Student!", "Aspiring Web Developer!"],
    typeSpeed: 45,
    backSpeed: 50,
    loop: true
});

// Progress bars and percentage counters animation
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    const percentages = document.querySelectorAll(".percentage");
    const skillsSection = document.getElementById("Skills");

    // Function to animate progress bars and percentages
    function animateProgressBars() {
        progressBars.forEach(progress => {
            const percentage = progress.getAttribute("data-percentage");
            progress.style.width =  `${percentage}%`;
        });

        percentages.forEach(percentage => {
            const target = +percentage.getAttribute("data-target");
            let count = 0;

            const updateCount = () => {
                if (count < target) {
                    count++;
                    percentage.innerText =`${count}%`;
                    setTimeout(updateCount, 20);
                } else {
                    percentage.innerText = `${target}%`;
                }
            };

            updateCount();
        });
    }

    // Function to reset progress bars and percentages to 0
    function resetProgressBars() {
        progressBars.forEach(progress => {
            progress.style.width = "0%";
        });
        percentages.forEach(percentage => {
            percentage.innerText = "0%";
        });
    }

    // Function to check if the skills section is in view
    function checkSkillsInView() {
        const sectionPosition = skillsSection.getBoundingClientRect();
        const inView = sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0;

        if (inView) {
            resetProgressBars(); // Reset to 0%
            setTimeout(animateProgressBars, 100); // Animate after reset
        }
    }

    // Add scroll event listener to trigger animation on scroll
    document.addEventListener("scroll", checkSkillsInView);

    // Initial load check if section is in view
    checkSkillsInView();
});

// JavaScript to observe elements and add the 'visible' class on scroll
document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4 // Trigger when 40% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add class to start animation
            } else {
                entry.target.classList.remove("visible"); // Remove class to reset animation
            }
        });
    }, observerOptions);

    blocks.forEach(block => {
        observer.observe(block);
    });
});

// Initialize ScrollReveal with reset option
ScrollReveal().reveal('#Home .container, .hero-text', { origin: 'left', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#Education h2, #Education p', { origin: 'right', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#Education .education-wrapper', { origin: 'left', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#Skills h1, #Skills h2, #Skills p', { origin: 'right', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('.skill-container', { origin: 'left', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('.skill-item', { origin: 'right', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#Project', { origin: 'left', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#contact h1, #contact p, #contact form', { origin: 'bottom', distance: '50px', duration: 1000, reset: true });




let activeOverlay = null;

function showOverlay(box) {
  const overlay = box.querySelector('.overlay');

  // Check if this overlay is already active (toggled up)
  if (activeOverlay === overlay) {
    // If the same overlay is clicked again, move it down
    overlay.style.bottom = '-100%';
    activeOverlay = null; // Reset activeOverlay since it's now hidden
  } else {
    // If it's a new overlay, first hide the currently active one
    if (activeOverlay) {
      activeOverlay.style.bottom = '-100%';
    }

    // Move the new overlay up
    overlay.style.bottom = '0';
    activeOverlay = overlay; // Set this as the new active overlay
  }
}


// Initialize EmailJS with your Public Key
emailjs.init("LG3sttw4D87Opck-U"); // Replace with your actual EmailJS Public Key

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the email using EmailJS
    emailjs.sendForm("service_0uwyscz", "template_akimpwr", this)
        .then(function(response) {
            alert("Message sent successfully!"); // Success message
        }, function(error) {
            alert("Failed to send message. Please try again later."); // Error message
        });
});