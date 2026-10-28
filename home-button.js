(() => {
  function addHomeButton() {
    if (!document.body || document.querySelector('.home-button')) return;

    const home = document.createElement('a');
    home.className = 'home-button';
    home.href = 'page2.html';
    home.setAttribute('aria-label', 'Home: Afri’s nine panels');
    home.title = 'Home';

    const icon = document.createElement('img');
    icon.src = 'assets/home-button.png';
    icon.alt = '';
    icon.width = 512;
    icon.height = 512;
    icon.decoding = 'async';
    home.append(icon);
    document.body.append(home);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHomeButton, { once: true });
  } else {
    addHomeButton();
  }
})();
