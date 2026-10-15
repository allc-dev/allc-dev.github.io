// Idioma do navegador como padrão; escolha manual tem prioridade.
(() => {
  const languageKey = 'allc_lang';
  function applyLanguage(language, remember = false) {
    const lang = language === 'pt' ? 'pt' : 'en';
    const copy = translations[lang];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const text = copy[element.dataset.i18n];
      if (text) element.textContent = text;
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === lang));
    });
    document.querySelectorAll('[data-label]').forEach(element => element.setAttribute('aria-label', copy[element.dataset.label]));
    if (!document.body.dataset.app) document.title = copy.page_title;
    document.querySelector('meta[name="description"]').content = document.body.dataset.app ? copy['app_' + document.body.dataset.app] : copy.intro;
    if (remember) { try { localStorage.setItem(languageKey, lang); } catch (_) {} }
    document.documentElement.classList.remove('i18n-pending');
  }
  let stored;
  try { stored = localStorage.getItem(languageKey); } catch (_) {}
  const browserLang = (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  applyLanguage(['pt', 'en'].includes(stored) ? stored : browserLang);
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language, true)));
  const toggle = document.querySelector('.mobile-toggle');
  const navigation = document.querySelector('#navigation');
  function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
  if ('serviceWorker' in navigator && ['http:', 'https:'].includes(location.protocol)) navigator.serviceWorker.register('/sw.js').catch(() => {});
})();
