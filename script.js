/* ===========================
   Typing Animation
=========================== */

const words = [
  "Front-End Developer",
  "Web Designer",
  "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  
  const current = words[wordIndex];
  
  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
  } else {
    typing.textContent = current.substring(0, charIndex--);
  }
  
  let speed = deleting ? 60 : 120;
  
  if (!deleting && charIndex > current.length) {
    deleting = true;
    speed = 1200;
  }
  
  if (deleting && charIndex < 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 0;
  }
  
  setTimeout(typeEffect, speed);
}

typeEffect();

/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  
  let current = "";
  
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link => {
    
    link.style.color = "#fff";
    
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#38bdf8";
    }
    
  });
  
});

/* ===========================
   Scroll Reveal
=========================== */

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      
    }
    
  });
  
});

document.querySelectorAll(".card,.about-card,.skill").forEach(el => {
  
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = ".8s";
  
  observer.observe(el);
  
});

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const nameTyping = document.getElementById("nameTyping");

if (nameTyping) {

    const name = "Visal Udyogi";
    let index = 0;

    function typeName() {

        if (index < name.length) {
            nameTyping.textContent += name.charAt(index);
            index++;
            setTimeout(typeName, 150);
        }

    }

    typeName();
}
