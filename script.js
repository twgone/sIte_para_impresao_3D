/**
 * Site estático: modo escuro (localStorage) e contato via wa.me.
 * Sem backend.
 */
(function () {
  var STORAGE_KEY = "theme-dark";
  var CLASS_DARK = "theme-dark";
  var body = document.body;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add(CLASS_DARK);
    } else {
      body.classList.remove(CLASS_DARK);
    }
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.textContent = isDark ? "Modo claro" : "Modo escuro";
    btn.setAttribute(
      "aria-label",
      isDark ? "Voltar ao modo claro" : "Ativar modo escuro"
    );
  }

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
  applyTheme(saved === "1");

  btn.addEventListener("click", function () {
    var next = !body.classList.contains(CLASS_DARK);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch (e) {
      /* ignore */
    }
  });
})();
