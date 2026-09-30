

let element = document.getElementById("a");
let menu = document.getElementById("menu");

element.onclick = function () {
  menu.classList.toggle("menu-toglle");
};

let skill = document.querySelectorAll(".the-progress span");
let section_skill = document.querySelector(".our-skills");
window.onscroll = function () {
  if (window.scrollY >= section_skill.offsetTop - 100) {
    skill.forEach((skil) => {
      skil.style.width = skil.dataset.width;
    });
  }
};
















let btn = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
