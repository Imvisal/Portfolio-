/* ===========================
   Typing Animation (Job)
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

  if (!typing) return;

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
   About Typing
=========================== */

const about = document.getElementById("aboutTyping");

if (about) {

  const aboutText =
    "I'm Visal Udyogi from Sri Lanka. I enjoy building clean, fast and responsive websites. Currently I'm learning modern web development and improving my front-end skills every day.";

  let aboutIndex = 0;

  function typeAbout() {

    if (aboutIndex < aboutText.length) {

      about.textContent += aboutText.charAt(aboutIndex);

      aboutIndex++;

      setTimeout(typeAbout, 25);

    }

  }

  typeAbout();

}


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

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

};

/* Mouse Glow */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* ===========================
   Back To Top
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ===========================
   Seasonal Effects
=========================== */

const effect = document.getElementById("season-effect");

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

// Christmas Snow
if (month === 12 && day >= 24 && day <= 26) {

    for (let i = 0; i < 60; i++) {

        const snow = document.createElement("div");

        snow.className = "snow";
        snow.innerHTML = "❄";

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.animationDuration = (5 + Math.random() * 6) + "s";
        snow.style.fontSize = (12 + Math.random() * 20) + "px";
        snow.style.opacity = Math.random();

        effect.appendChild(snow);

    }

}
// ==========================
// New Year Fireworks
// ==========================

if (month === 1 && day === 1) {

    const colors = [
        "#ff0000",
        "#00ff00",
        "#ffff00",
        "#00ffff",
        "#ff00ff",
        "#ffffff"
    ];

    setInterval(() => {

        const firework = document.createElement("div");

        firework.className = "firework";

        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 80 + "vh";
        firework.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        effect.appendChild(firework);

        setTimeout(() => {

            firework.remove();

        },1500);

    },300);

}

// ==========================
// Valentine's Hearts
// ==========================

if (month === 2 && day === 14) {

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.opacity = Math.random();

        effect.appendChild(heart);

    }

}
