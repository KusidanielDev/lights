// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: "Crystal Cascade Chandelier",
    price: 899.99,
    category: "chandeliers",
    images: [
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=2070",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974",
    ],
    description:
      "Elegant crystal chandelier with hand-cut crystals and gold-plated frame. Perfect for dining rooms and grand entryways.",
    specs: [
      'Dimensions: 24" Diameter x 36" Height',
      "Material: Hand-cut crystal, brass frame",
      "Light Source: 8 x E12 candelabra bulbs (not included)",
      "Weight: 25 lbs",
      "Finish: Gold-plated brass",
      "Warranty: 5-year limited warranty",
    ],
  },
  {
    id: 2,
    name: "Modern Orb Pendant Light",
    price: 349.99,
    category: "pendants",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070",
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070",
      "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974",
    ],
    description:
      "Sleek minimalist pendant light with dimmable LED lighting and brushed brass finish. Ideal for kitchens and dining areas.",
    specs: [
      'Dimensions: 14" Diameter',
      "Material: Glass, brass",
      "Light Source: Integrated LED (3000K, dimmable)",
      "Wattage: 18W (equivalent to 100W incandescent)",
      "Finish: Brushed brass",
      "Warranty: 3-year limited warranty",
    ],
  },
  {
    id: 3,
    name: "ColorFlow Smart LED Strips",
    price: 129.99,
    category: "led",
    images: [
      "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2052",
    ],
    description:
      "16 million colors, voice control, and app integration for dynamic lighting effects. Transform any space with customizable ambient lighting.",
    specs: [
      "Length: 16.4 feet (5 meters)",
      "Colors: 16 million RGB colors",
      "Control: Mobile app, voice control (Alexa, Google Assistant)",
      "Connectivity: Wi-Fi, Bluetooth",
      "Waterproof Rating: IP65 (splash resistant)",
      "Warranty: 2-year limited warranty",
    ],
  },
  {
    id: 4,
    name: "Industrial Edge Pendant Light",
    price: 279.99,
    category: "pendants",
    images: [
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
    ],
    description:
      "Raw metal finish with Edison bulb for a vintage industrial aesthetic. Creates a warm, inviting atmosphere in any space.",
    specs: [
      'Dimensions: 10" Diameter x 48" Cord',
      "Material: Metal, glass",
      "Light Source: E26 Edison bulb (included)",
      "Wattage: 60W (included)",
      "Finish: Raw metal, black",
      "Warranty: 2-year limited warranty",
    ],
  },
  {
    id: 5,
    name: "Golden Arc Floor Lamp",
    price: 459.99,
    category: "floor",
    images: [
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070",
    ],
    description:
      "Elegant arc lamp with adjustable height and dimmable LED lighting. Perfect for reading nooks and living rooms.",
    specs: [
      'Dimensions: 72" Height, 40" Arc span',
      "Material: Metal, marble base",
      "Light Source: Integrated LED (2700K-5000K, dimmable)",
      "Wattage: 15W (equivalent to 100W incandescent)",
      'Adjustable: Height adjustable from 60" to 72"',
      "Warranty: 3-year limited warranty",
    ],
  },
  {
    id: 6,
    name: "Minimalist Linear Chandelier",
    price: 749.99,
    category: "chandeliers",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070",
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070",
      "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974",
    ],
    description:
      "Contemporary design with integrated LED lights and polished chrome finish. Creates a striking focal point in modern spaces.",
    specs: [
      'Dimensions: 48" Length x 4" Height',
      "Material: Aluminum, glass",
      "Light Source: Integrated LED (3000K, dimmable)",
      "Wattage: 36W (equivalent to 200W incandescent)",
      "Finish: Polished chrome",
      "Warranty: 5-year limited warranty",
    ],
  },
  {
    id: 7,
    name: "Vintage Edison Wall Sconce",
    price: 189.99,
    category: "wall",
    images: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974",
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978",
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070",
    ],
    description:
      "Handcrafted wall sconce with exposed filament bulb and antique brass finish. Perfect for hallways and accent lighting.",
    specs: [
      'Dimensions: 8" Width x 12" Height',
      "Material: Brass, glass",
      "Light Source: E26 Edison bulb (included)",
      "Wattage: 40W (included)",
      "Finish: Antique brass",
      "Warranty: 2-year limited warranty",
    ],
  },
  {
    id: 8,
    name: "Smart Ambient Table Lamp",
    price: 159.99,
    category: "table",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070",
    ],
    description:
      "Voice-controlled table lamp with millions of colors and adjustable white light. Create the perfect ambiance with your voice.",
    specs: [
      'Dimensions: 10" Height x 6" Diameter',
      "Material: Aluminum, silicone",
      "Light Source: RGBW LEDs (16 million colors)",
      "Control: App, voice (Alexa, Google Assistant)",
      "Connectivity: Wi-Fi, Bluetooth",
      "Warranty: 2-year limited warranty",
    ],
  },
];

let cart = [];
let savedScrollPosition = 0;

// ========== UTILITY FUNCTIONS ==========
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 1500);
  }, 10);
}

function saveScrollPosition() {
  savedScrollPosition = window.scrollY;
}

function restoreScrollPosition() {
  window.scrollTo(0, savedScrollPosition);
}

// ========== MOBILE MENU MODULE ==========
(function mobileMenuModule() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  function toggleMenu(e) {
    e.stopPropagation();
    mainNav.classList.toggle("active");
  }

  function closeMenuOnClickOutside(e) {
    const isClickInsideMenu =
      mainNav.contains(e.target) || e.target === mobileMenuToggle;
    if (!isClickInsideMenu && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
    }
  }

  function closeMenuOnLinkClick() {
    mainNav.classList.remove("active");
  }

  function init() {
    if (mobileMenuToggle && mainNav) {
      mobileMenuToggle.addEventListener("click", toggleMenu);
      document.addEventListener("click", closeMenuOnClickOutside);
      navLinks.forEach((link) => {
        link.addEventListener("click", closeMenuOnLinkClick);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// ========== CART MODULE ==========
(function cartModule() {
  const cartBtns = document.querySelectorAll(".cart-btn, .cart-link");
  const cartModal = document.getElementById("cart-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCountElements = document.querySelectorAll(".cart-count");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.querySelector(".checkout-btn");

  function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElements.forEach((count) => (count.textContent = totalItems));

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
              <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn btn-primary">Continue Shopping</a>
              </div>
            `;
      cartSubtotal.textContent = "$0.00";
      cartTotal.textContent = "$5.00";
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    } else if (checkoutBtn) {
      checkoutBtn.disabled = false;
    }

    let subtotal = 0;
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
              <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-image">
              <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
                <p class="cart-item-price">$${itemTotal.toFixed(2)}</p>
              </div>
              <button class="cart-item-remove" data-id="${
                item.id
              }">&times;</button>
            `;
      cartItemsContainer.appendChild(cartItem);
    });

    const deliveryFee = 5;
    const grandTotal = subtotal + deliveryFee;
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${grandTotal.toFixed(2)}`;

    document.querySelectorAll(".cart-item-remove").forEach((btn) => {
      btn.addEventListener("click", () =>
        removeFromCart(parseInt(btn.dataset.id))
      );
    });
  }

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
        image: product.images[0],
      });
    }
    updateCart();
    showNotification("Item added to cart!");
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
    showNotification("Item removed from cart!");
  }

  function init() {
    // Cart modal controls
    cartBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (cartModal) {
          saveScrollPosition();
          cartModal.style.display = "flex";
          document.body.classList.add("modal-open");
          updateCart();
        }
      });
    });

    // Close modal handlers
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        if (modal) {
          modal.style.display = "none";
          document.body.classList.remove("modal-open");
          restoreScrollPosition();
        }
      });
    });

    // Close when clicking outside modal
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
        document.body.classList.remove("modal-open");
        restoreScrollPosition();
      }
    });

    // Expose functions to global scope
    window.getCart = () => cart;
    window.addToCart = addToCart;
    window.updateCart = updateCart;
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// ========== PRODUCT MODAL MODULE ==========
(function productModalModule() {
  const productModal = document.getElementById("product-modal");
  if (!productModal) return;

  const productGallery = productModal.querySelector(".product-gallery");
  const productDetails = productModal.querySelector(".product-details");
  const galleryPrev = productModal.querySelector(".gallery-prev");
  const galleryNext = productModal.querySelector(".gallery-next");
  const galleryIndicators = productModal.querySelector(".gallery-indicators");
  let currentSlide = 0;

  function updateGallery() {
    if (!productGallery.children.length) return;
    const slideWidth = productGallery.offsetWidth;
    productGallery.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (galleryIndicators) {
      document
        .querySelectorAll(".gallery-indicator")
        .forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentSlide);
        });
    }
  }

  function goToSlide(index) {
    currentSlide = index;
    updateGallery();
  }

  function createImageElement(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  function openProductModal(product) {
    saveScrollPosition();
    currentSlide = 0;
    if (!productGallery || !productDetails || !galleryIndicators) return;

    // Clear existing content
    productGallery.innerHTML = "";
    galleryIndicators.innerHTML = "";

    // Create media elements
    product.images.forEach((src, index) => {
      const img = createImageElement(
        src,
        `${product.name} - Image ${index + 1}`
      );
      img.style.minWidth = "100%";
      img.style.flexShrink = "0";
      img.style.display = "flex";
      img.style.alignItems = "center";
      img.style.justifyContent = "center";
      img.style.background = "#000";
      productGallery.appendChild(img);

      // Create indicator
      const indicator = document.createElement("div");
      indicator.className = "gallery-indicator";
      if (index === 0) indicator.classList.add("active");
      indicator.addEventListener("click", () => goToSlide(index));
      galleryIndicators.appendChild(indicator);
    });

    // Create product details
    productDetails.innerHTML = `
            <h2>${product.name}</h2>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-description">${product.description}</div>
            <div class="specs-toggle">
              <h4>Technical Specifications <i class="fas fa-chevron-down"></i></h4>
              <div class="specs-content">
                <ul>
                  ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
                </ul>
              </div>
            </div>
            <button class="btn btn-primary add-to-cart" data-id="${
              product.id
            }">Add to Cart</button>
          `;

    // Force gallery reset before showing
    setTimeout(() => {
      updateGallery();
      productGallery.style.transition = "none";
      productGallery.style.transform = "translateX(0)";

      setTimeout(() => {
        productGallery.style.transition = "";
        updateGallery();
      }, 50);
    }, 10);

    // Show modal
    productModal.style.display = "flex";
    document.body.classList.add("modal-open");

    currentSlide = 0;
    updateGallery();
    window.addEventListener("resize", updateGallery);
  }

  // Navigation handlers
  if (galleryPrev) {
    galleryPrev.addEventListener("click", () =>
      goToSlide(Math.max(0, currentSlide - 1))
    );
  }

  if (galleryNext) {
    galleryNext.addEventListener("click", () =>
      goToSlide(Math.min(productGallery.children.length - 1, currentSlide + 1))
    );
  }

  // Close modal
  const closeModal = productModal.querySelector(".close-modal");
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      productModal.style.display = "none";
      document.body.classList.remove("modal-open");
      restoreScrollPosition();
    });
  }

  // Close when clicking outside modal
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      productModal.style.display = "none";
      document.body.classList.remove("modal-open");
      restoreScrollPosition();
    }
  });

  // View details button handler
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details")) {
      const productCard = e.target.closest(".product-card");
      if (productCard) {
        const productId = parseInt(productCard.dataset.id);
        const product = products.find((p) => p.id === productId);
        if (product) openProductModal(product);
      }
    }
  });

  // Initialize gallery
  updateGallery();
  window.openProductModal = openProductModal;
})();

// ========== CHECKOUT MODULE ==========
(function checkoutModule() {
  const checkoutModal = document.getElementById("checkout-modal");
  const checkoutForm = document.getElementById("customer-checkout-form");
  const checkoutFormMessage = document.getElementById("checkout-form-message");
  const closeCheckoutBtns = document.querySelectorAll(
    "#checkout-modal .close-modal"
  );
  const cancelCheckoutBtn = document.querySelector(".cancel-checkout");
  const submitOrderBtn = document.querySelector(".submit-order");
  const cartModal = document.getElementById("cart-modal");
  const checkoutBtn = document.querySelector(".checkout-btn");

  function showFormMessage(message, type = "error") {
    if (checkoutFormMessage) {
      checkoutFormMessage.textContent = message;
      checkoutFormMessage.className = `form-message ${type}`;
      checkoutFormMessage.style.display = "block";
    }
  }

  function hideFormMessage() {
    if (checkoutFormMessage) {
      checkoutFormMessage.style.display = "none";
    }
  }

  function sendOrderToWhatsApp(name, phone, address, notes) {
    const cartItems = window.getCart ? window.getCart() : [];
    if (cartItems.length === 0) {
      showFormMessage("Your cart is empty!", "error");
      return false;
    }

    let message = `📋 *NEW ORDER - Lumina Luxe* 📋\n\n`;
    message += `👤 *Customer:* ${name}\n`;
    message += `📞 *Phone:* ${phone}\n`;
    message += `🏠 *Address:* ${address}\n\n`;
    message += `🛒 *Order Items:*\n`;

    let subtotal = 0;
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      message += `➤ ${item.name} (Qty: ${item.quantity}) - $${itemTotal.toFixed(
        2
      )}\n`;
      subtotal += itemTotal;
    });

    const deliveryFee = 5;
    const grandTotal = subtotal + deliveryFee;

    message += `\n💰 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    message += `🚚 *Delivery Fee:* $${deliveryFee.toFixed(2)}\n`;
    message += `💵 *Total:* $${grandTotal.toFixed(2)}\n\n`;

    if (notes) message += `📝 *Special Instructions:* ${notes}\n\n`;
    message += `⏰ *Order Time:* ${new Date().toLocaleString()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Clear cart
    if (window.updateCart) {
      cart.length = 0;
      window.updateCart();
    }

    checkoutModal.style.display = "none";
    document.body.classList.remove("modal-open");
    checkoutForm.reset();
    return true;
  }

  function init() {
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const cartItems = window.getCart ? window.getCart() : [];

        if (cartItems.length === 0) {
          showNotification("Your cart is empty!", "error");
          return;
        }

        if (cartModal) cartModal.style.display = "none";
        if (checkoutModal) {
          saveScrollPosition();
          checkoutModal.style.display = "flex";
          document.body.classList.add("modal-open");
          hideFormMessage();
        }
      });
    }

    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const address = document
          .getElementById("customer-address")
          .value.trim();
        const notes = document.getElementById("customer-notes").value.trim();

        if (!name || !phone || !address) {
          showFormMessage("Please fill in all required fields", "error");
          return;
        }

        sendOrderToWhatsApp(name, phone, address, notes);
        restoreScrollPosition();
      });
    }

    if (cancelCheckoutBtn) {
      cancelCheckoutBtn.addEventListener("click", () => {
        checkoutModal.style.display = "none";
        document.body.classList.remove("modal-open");
        restoreScrollPosition();
        checkoutForm.reset();
        hideFormMessage();
        if (cartModal) {
          cartModal.style.display = "flex";
          document.body.classList.add("modal-open");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// ========== FORM SUBMISSIONS ==========
(function formModules() {
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const newsletterForm = document.querySelector(".newsletter-form");

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showNotification(
          "Thank you for your message! We will get back to you soon."
        );
        contactForm.reset();
      });
    }
  });
})();

// ========== GLOBAL EVENT LISTENERS ==========
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find((p) => p.id === productId);
    if (product && window.addToCart) {
      window.addToCart(product);

      // Close the product modal if visible
      const productModal = document.getElementById("product-modal");
      if (productModal && productModal.style.display === "flex") {
        productModal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    }
  }
});

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products-container");

  // Generate product cards
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.dataset.category = product.category;
    productCard.dataset.id = product.id;

    productCard.innerHTML = `
            <div class="product-image">
              <img src="${product.images[0]}" alt="${
      product.name
    }" loading="lazy">
            </div>
            <div class="product-info">
              <h3><span>${product.name.split(" ")[0]}</span> ${product.name
      .split(" ")
      .slice(1)
      .join(" ")}</h3>
              <div class="product-category">${product.category}</div>
              <p class="product-description">${product.description}</p>
              <div class="product-price">$${product.price.toFixed(2)}</div>
              <div class="product-buttons">
                <button class="btn btn-secondary view-details">Details</button>
                <button class="btn btn-primary add-to-cart" data-id="${
                  product.id
                }">Add to Cart</button>
              </div>
            </div>
          `;

    productsContainer.appendChild(productCard);
  });

  // Add Filter Functionality AFTER products are loaded
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      // Highlight active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show/hide product cards
      productCards.forEach((card) => {
        const cardCategory = card.dataset.category;
        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Toggle specs visibility
  document.addEventListener("click", (e) => {
    if (e.target.closest(".specs-toggle")) {
      const toggle = e.target.closest(".specs-toggle");
      const content = toggle.querySelector(".specs-content");
      const icon = toggle.querySelector("i");

      content.style.display =
        content.style.display === "block" ? "none" : "block";
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    }
  });
});
