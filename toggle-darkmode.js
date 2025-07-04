const html = document.documentElement;
let logo;
let lightRadio;
let darkRadio;
let toggleBtn;

let LIGHT_LOGO;
let DARK_LOGO;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (logo && !logo.dataset.fixedLogo) {
    logo.src = theme === 'dark' ? DARK_LOGO : LIGHT_LOGO;
  }

  if (toggleBtn) {
    toggleBtn.textContent = theme === 'dark' ? '🌙' : '🌞';
  }

  document.querySelectorAll('.video-frame-wrapper').forEach(wrapper => {
    wrapper.classList.toggle('dark-wrapper', theme === 'dark');
    wrapper.classList.toggle('light-wrapper', theme === 'light');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  logo = document.getElementById('logo');
  lightRadio = document.getElementById('light-mode');
  darkRadio = document.getElementById('dark-mode');
  toggleBtn = document.getElementById('toggle-theme');

  LIGHT_LOGO = 'https://abikesa.github.io/logos/assets/ukubona-light.png';
  DARK_LOGO  = 'https://abikesa.github.io/logos/assets/ukubona-dark.png';

  const storedTheme = localStorage.getItem('theme') || 'light';
  setTheme(storedTheme);

  if (lightRadio && darkRadio) {
    (storedTheme === 'dark' ? darkRadio : lightRadio).checked = true;
  }

  if (lightRadio) {
    lightRadio.addEventListener('change', () => {
      if (lightRadio.checked) setTheme('light');
    });
  }

  if (darkRadio) {
    darkRadio.addEventListener('change', () => {
      if (darkRadio.checked) setTheme('dark');
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
});
