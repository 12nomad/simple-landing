const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navContainer = document.querySelector(".navbar-container");
const navLinks = document.querySelectorAll(".nav-link");

navOpen.addEventListener("click", () =>
  navContainer.classList.add("nav-opened")
);
navClose.addEventListener("click", () =>
  navContainer.classList.remove("nav-opened")
);
Array.from(navLinks).forEach((link) =>
  link.addEventListener("click", () => {
    navContainer.classList.remove("nav-opened");
  })
);
