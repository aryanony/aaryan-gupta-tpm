// theme.js — Dark/Light mode toggle
(function() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const sunSVG = '<svg width="20" height="20" viewBox="0 0 256 256" fill="none"><path fill="currentColor" d="M128 60a68 68 0 1 0 68 68 68.07 68.07 0 0 0-68-68Zm0 120a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52ZM120 36V16a8 8 0 0 1 16 0v20a8 8 0 0 1-16 0Zm72.49 51.51a8 8 0 0 0 5.66-2.35l14.14-14.14a8 8 0 0 0-11.31-11.31l-14.14 14.14a8 8 0 0 0 5.65 13.66ZM240 120h-20a8 8 0 0 0 0 16h20a8 8 0 0 0 0-16Zm-50.15 71.85a8 8 0 0 0-11.31 11.31l14.14 14.14a8 8 0 0 0 11.31-11.31ZM128 196a8 8 0 0 0-8 8v20a8 8 0 0 0 16 0v-20a8 8 0 0 0-8-8Zm-57.85-4.15-14.14 14.14a8 8 0 0 0 11.31 11.31l14.14-14.14a8 8 0 0 0-11.31-11.31ZM36 120H16a8 8 0 0 0 0 16h20a8 8 0 0 0 0-16Zm27.51-32.49a8 8 0 0 0 5.66-2.35 8 8 0 0 0 0-11.31L55.03 59.71a8 8 0 0 0-11.31 11.31l14.14 14.14a8 8 0 0 0 5.65 2.35Z"/></svg>';
  const moonSVG = '<svg width="20" height="20" viewBox="0 0 256 256" fill="none"><path fill="currentColor" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52 104.84 104.84 0 0 1 52.91-37 8 8 0 0 1 10 10 88.08 88.08 0 0 0 109.8 109.8 8 8 0 0 1 10 10Z"/></svg>';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
  }

  // Set initial icon
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  toggle.innerHTML = current === 'dark' ? sunSVG : moonSVG;

  toggle.addEventListener('click', function() {
    var now = document.documentElement.getAttribute('data-theme');
    applyTheme(now === 'dark' ? 'light' : 'dark');
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
