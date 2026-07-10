const menuBtn = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
