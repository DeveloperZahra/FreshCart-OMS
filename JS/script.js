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

const productContainer = document.getElementById("productsGrid");

products.forEach(product => {
    productContainer.innerHTML += `
    <div class="product-card">
        <img src="${product.imageCover}" class="product-img">

        <p class="product-category">${product.category.name}</p>

        <h3 class="product-title">${product.title}</h3>

        <div class="product-price-rating">
            <span class="price">${product.price} EGP</span>
            <span class="rating">⭐ ${product.ratingsAverage}</span>
        </div>

        <div class="product-actions">
           <button class="view-btn" data-id="${item._id}">view</button>

            <button class="wishlist-btn">Wish List</button>
        </div>
    </div>
    `;
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-btn")) {

        const productId = e.target.getAttribute("data-id");

       
        document.getElementById("loader-overlay").style.display = "flex";

       
        setTimeout(() => {

         
            window.location.href = `product.html?id=${productId}`;

        }, 1500); 
    }
});


