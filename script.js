const translations = {
    en: {
        greeting: "Hello!",
        sampleText: "Welcome to my page"
    },
    jp: {
        greeting: "今日は！",
        sampleText: "サイトへようこそ"
    },
    hu: {
        greeting: "Szia!",
        sampleText: "Üdv az oldalamon!"
    },
};

const languageToggle = document.getElementsByClassName('languageToggle')[0];
const elementsToTranslate = document.querySelectorAll('[id]');

languageToggle.addEventListener('change', (event) => {
  const language = event.target.value;

  elementsToTranslate.forEach((element) => {
    const key = element.id;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
});

window.addEventListener('load', () => {
  languageToggle.value = 'en'; // default language
  languageToggle.dispatchEvent(new Event('change'));
});