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
