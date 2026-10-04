const html = document.documentElement;
const themes = ["system", "light", "dark"];

try {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    html.dataset.theme = saved;
  }
} catch {}

function applyTheme(theme) {
  const isSystem = theme === "system";
  if (isSystem) {
    delete html.dataset.theme;
  } else {
    html.dataset.theme = theme;
  }
  try {
    if (isSystem) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
  } catch {}
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".theme-toggle")) return;
  const next = themes[(themes.indexOf(html.dataset.theme ?? "system") + 1) % themes.length];
  if (document.startViewTransition) {
    document.startViewTransition(() => applyTheme(next));
  } else {
    applyTheme(next);
  }
});
