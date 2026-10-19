export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";

export function isTheme(value: unknown): value is Theme {
  return value === "dark" || value === "light";
}

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    // Private browsing or storage restrictions must not prevent switching.
    return null;
  }
}

// Runs in <head>, before the body can paint. Only the root attribute changes;
// React's initial render stays identical on the server and in the browser.
export const themeInitScript = `(() => {
  let theme;
  try { theme = localStorage.getItem("${THEME_STORAGE_KEY}"); } catch {}
  if (theme !== "dark" && theme !== "light") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = theme;
})();`;
