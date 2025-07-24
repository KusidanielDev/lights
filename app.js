// Mobile menu toggle
document
  .querySelector(".mobile-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".main-nav").classList.toggle("active");
  });

// Cart functionality
let cartCount = 0;
const cartCountElements = document.querySelectorAll(".cart-count");
const addToCartButtons = document.querySelectorAll(".btn-primary");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    cartCount++;
    cartCountElements.forEach((el) => (el.textContent = cartCount));

    // Create notification
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <span>Item added to cart!</span>
                `;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateY(0)";
    }, 10);

    // Hide notification
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(20px)";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  });
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.dataset.category;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    productCards.forEach((card) => {
      if (
        category === "all" ||
        card
          .querySelector(".product-category")
          .textContent.toLowerCase()
          .includes(category)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Sticky header effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(13, 13, 18, 0.98)";
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.backgroundColor = "rgba(13, 13, 18, 0.95)";
    header.style.boxShadow = "var(--shadow)";
  }
});
