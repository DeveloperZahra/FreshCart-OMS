// ===============================
// NAV ICONS ACTIVE STATE
// ===============================

const icons = document.querySelectorAll('.nav-right i');

icons.forEach(icon => {
    icon.addEventListener('click', () => {

        // Remove active from all icons
        icons.forEach(i => i.classList.remove('active'));

        // Add active to clicked icon
        icon.classList.add('active');
    });
});

// ===============================
// USER MENU TOGGLE
// ===============================
const userIcon = document.querySelector(".user-icon");
const userMenu = document.querySelector(".user-menu");

if (userIcon) {
    userIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        userMenu.classList.toggle("show");
    });
}

document.addEventListener("click", () => {
    if (userMenu) userMenu.classList.remove("show");
});



// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";

    navLinks.style.flexDirection = "column";
    navLinks.style.background = "#f1f4f2";
    navLinks.style.padding = "15px";
    navLinks.style.borderRadius = "10px";
});

