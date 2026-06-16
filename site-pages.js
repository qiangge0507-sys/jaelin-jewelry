const toast = document.querySelector("[data-toast]");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("click", (event) => {
  const heart = event.target.closest(".heart, [data-wishlist]");
  if (heart) {
    heart.classList.toggle("active");
    if (heart.classList.contains("heart")) heart.textContent = heart.classList.contains("active") ? "♥" : "♡";
    showToast("Added to wishlist");
  }

  if (event.target.closest("[data-whatsapp]")) {
    showToast("WhatsApp contact placeholder. Replace with real number later.");
  }
});

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  const note = form.querySelector("[data-form-note]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const missing = [...form.querySelectorAll("[required]")].filter((field) => !field.value.trim());
    if (missing.length) {
      if (note) note.textContent = "Please complete all fields before sending.";
      missing[0].focus();
      return;
    }
    if (note) note.textContent = "Thank you. Jaelin team will contact you soon.";
    form.reset();
    showToast("Inquiry sent");
  });
});
