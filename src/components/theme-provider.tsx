"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  isTheme,
  readStoredTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "~/lib/theme";

const ThemeContext = createContext<{
  theme: Theme | null;
  toggleTheme: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const preference = useRef<Theme | null>(null);
  const initialized = useRef(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyTheme = useCallback((nextTheme: Theme) => {
    const root = document.documentElement;
    if (
      initialized.current &&
      root.dataset.theme !== nextTheme &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Enable color transitions only for a theme change, never the first paint.
      if (transitionTimer.current !== null)
        clearTimeout(transitionTimer.current);
      root.dataset.themeTransition = "true";
      transitionTimer.current = setTimeout(() => {
        delete root.dataset.themeTransition;
        transitionTimer.current = null;
      }, 400); // Allow the 350ms CSS transition to finish before restoring hover styles.
    }
    root.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    preference.current = readStoredTheme();

    const syncTheme = () => {
      applyTheme(preference.current ?? (system.matches ? "dark" : "light"));
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      preference.current = isTheme(event.newValue) ? event.newValue : null;
      syncTheme();
    };

    syncTheme();
    initialized.current = true;
    system.addEventListener("change", syncTheme);
    window.addEventListener("storage", onStorage);
    return () => {
      initialized.current = false;
      if (transitionTimer.current !== null)
        clearTimeout(transitionTimer.current);
      delete document.documentElement.dataset.themeTransition;
      system.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", onStorage);
    };
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    preference.current = nextTheme;
    applyTheme(nextTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Keep the manual preference for this visit if storage is unavailable.
    }
  }, [applyTheme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme requires a ThemeProvider");
  return context;
}
