const translations = {
    en: {

    },
    it: {

    },
    ro: {

    }
};

// Change language
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });

  // Save selection
  localStorage.setItem("preferredLanguage", lang);
}

// Set initial language
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-selector");
  const savedLang = localStorage.getItem("preferredLanguage") || "en";

  selector.value = savedLang;
  changeLanguage(savedLang);

  selector.addEventListener("change", () => {
    changeLanguage(selector.value);
  });
});