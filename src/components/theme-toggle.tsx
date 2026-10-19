"use client";

import { Icon } from "./icons";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme
    ? `Tema ${theme === "dark" ? "escuro" : "claro"} ativo. Ativar modo ${theme === "dark" ? "claro" : "escuro"}`
    : "Alternar tema";

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      disabled={theme === null}
      aria-label={label}
      title={label}
    >
      <Icon name="sun" size={20} className="theme-toggle__sun" />
      <Icon name="moon" size={20} className="theme-toggle__moon" />
    </button>
  );
}
