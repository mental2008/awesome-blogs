(function () {
  var storageKey = 'mental-blog-theme';
  var root = document.documentElement;
  var systemTheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var preference = null;

  function validTheme(value) {
    return value === 'light' || value === 'dark';
  }

  try {
    var savedTheme = window.localStorage.getItem(storageKey);
    if (validTheme(savedTheme)) preference = savedTheme;
  } catch (_) {
    // Switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    var theme = preference || (systemTheme && systemTheme.matches ? 'dark' : 'light');
    root.setAttribute('data-theme', theme);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#151a21' : '#ffffff');

    var button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      button.setAttribute('title', button.getAttribute(theme === 'dark' ? 'data-label-light' : 'data-label-dark'));
    }
  }

  // Run in the head, before styles and content, to avoid a light flash at night.
  applyTheme();

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;

    applyTheme();
    button.hidden = false;
    button.addEventListener('click', function () {
      preference = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch (_) {
        // Keep the selection for this page even if it cannot be saved.
      }
      applyTheme();
    });
  });

  function followSystem() {
    if (!preference) applyTheme();
  }

  if (systemTheme) {
    if (systemTheme.addEventListener) systemTheme.addEventListener('change', followSystem);
    else if (systemTheme.addListener) systemTheme.addListener(followSystem);
  }

  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey && event.key !== null) return;
    preference = validTheme(event.newValue) ? event.newValue : null;
    applyTheme();
  });
})();
