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
  // A instalação só é solicitada por um clique do visitante.
  let deferredInstall = null;
  const installButtons = [...document.querySelectorAll('.install-btn')];
  const installDialog = document.querySelector('#install-dialog');
  const installed = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  function refreshInstallButtons() { installButtons.forEach(button => { button.hidden = installed(); }); }
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstall = event; refreshInstallButtons(); });
  installButtons.forEach(button => button.addEventListener('click', async () => {
    if (deferredInstall) {
      const prompt = deferredInstall; deferredInstall = null;
      await prompt.prompt(); await prompt.userChoice;
    } else if (installDialog && !installDialog.open) { installDialog.showModal(); }
  }));
  document.querySelector('[data-close-install]')?.addEventListener('click', () => installDialog.close());
  window.addEventListener('appinstalled', () => { deferredInstall = null; installButtons.forEach(button => { button.hidden = true; }); });
  refreshInstallButtons();
  // Atualização do PWA: a nova versão só assume após o aceite, evitando trocar arquivos no meio da navegação.
  if ('serviceWorker' in navigator && ['http:', 'https:'].includes(location.protocol)) {
    const lang = () => (document.documentElement.lang.startsWith('pt') ? 'pt' : 'en');
    let reloading = false;
    function showUpdate(worker) {
      if (document.querySelector('.update-toast')) return;
      const copy = translations[lang()];
      const toast = document.createElement('div');
      toast.className = 'update-toast'; toast.setAttribute('role', 'status');
      const text = document.createElement('span'); text.textContent = copy.update_ready;
      const action = document.createElement('button'); action.type = 'button'; action.textContent = copy.update_reload;
      action.addEventListener('click', () => { action.disabled = true; worker.postMessage({ type: 'SKIP_WAITING' }); });
      toast.append(text, action); document.body.append(toast);
    }
    function track(worker) {
      worker.addEventListener('statechange', () => { if (worker.state === 'installed' && navigator.serviceWorker.controller) showUpdate(worker); });
    }
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloading) { reloading = true; location.reload(); } });
    navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).then(registration => {
      if (registration.waiting && navigator.serviceWorker.controller) showUpdate(registration.waiting);
      if (registration.installing) track(registration.installing);
      registration.addEventListener('updatefound', () => track(registration.installing));
      // PWA instalado pode ficar dias aberto em segundo plano: verifica ao voltar para o app.
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') registration.update().catch(() => {}); });
    }).catch(() => {});
  }
})();
