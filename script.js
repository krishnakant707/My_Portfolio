// script.js

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const darkModeToggle = document.getElementById("darkModeToggle");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Optional: Dark mode toggle (basic version)
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// Add Fade-in Effect on Scroll (AOS.js is already linked)
AOS.init({
  duration: 1000,
  once: true,
});

// Optionally: Highlight Nav Link on Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop - 80;
    const sectionHeight = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
