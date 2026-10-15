/**
 * ALLC Dev - Main Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. i18n Language Management ---
  const savedLang = localStorage.getItem("allc_lang");
  let currentLang = savedLang || (navigator.language && navigator.language.startsWith("pt") ? "pt" : "en");

  function setLanguage(lang) {
    if (!translations[lang]) lang = "en";
    currentLang = lang;
    localStorage.setItem("allc_lang", lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update active button state in language switcher
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  // Setup language button listeners
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Initial language setup
  setLanguage(currentLang);

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      mobileToggle.classList.toggle("open");
    });

    // Close menu when clicking any link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("open");
      });
    });
  }

  // --- 3. Header Scrolled State ---
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- 4. Contact Form Submissions ---
  window.sendContactEmail = function () {
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const subject = document.getElementById("form-subject").value.trim();
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      alert(currentLang === "pt" ? "Por favor, preencha nome, e-mail e mensagem." : "Please fill in name, email, and message.");
      return;
    }

    const sub = encodeURIComponent(subject ? `${subject} - Contato via allc.dev` : `Contato via allc.dev de ${name}`);
    const body = encodeURIComponent(
      `Nome / Name: ${name}\n` +
      `E-mail: ${email}\n\n` +
      `Mensagem / Message:\n${message}\n\n` +
      `--\nEnviado através de apps.allc.dev / allc-dev.github.io`
    );

    window.location.href = `mailto:allc.dev@outlook.com?subject=${sub}&body=${body}`;
  };

  window.sendContactWhatsApp = function () {
    const name = document.getElementById("form-name").value.trim();
    const message = document.getElementById("form-message").value.trim();

    let text = `Olá, André! 👋\n\n`;
    if (name) text += `*Nome:* ${name}\n`;
    if (message) text += `*Mensagem:*\n${message}\n`;
    text += `\n_Contato enviado através de apps.allc.dev_ 🌐`;

    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=5512988543055&text=${encoded}`, "_blank");
  };
});
