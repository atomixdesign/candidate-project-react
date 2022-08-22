const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu__items");
const expandBtn = document.querySelectorAll(".expand-btn");
// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open__");
  menuItems.classList.toggle("open__");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open__");
  });
});
