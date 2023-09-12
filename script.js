const toHomeBtn = document.getElementById("to-start");
window.addEventListener("scroll", () => {
  if (window.scrollY < 400) {
    toHomeBtn.style.display = "none";
  } else {
    toHomeBtn.style.display = "inline";
  }
});

toHomeBtn.addEventListener("click", () => {
  scroll(0, 0);
});

const hamburgerBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const icon = document.getElementById("icon");
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log(navLinks.classList.length);
  if (navLinks.classList.length == 2) {
    hamburgerBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
  } else {
    hamburgerBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
