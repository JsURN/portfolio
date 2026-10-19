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

  const applyTheme = useCallback((nextTheme: Theme) => {
    document.documentElement.dataset.theme = nextTheme;
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
    system.addEventListener("change", syncTheme);
    window.addEventListener("storage", onStorage);
    return () => {
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
