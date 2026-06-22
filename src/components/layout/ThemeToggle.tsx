"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const storageKey = "elegance-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("elegance-theme-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("elegance-theme-change", onStoreChange);
  };
}

function getSnapshot() {
  return getInitialTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="label-caps inline-flex min-h-12 items-center justify-center rounded-full border border-primary/15 bg-surface-container-low px-4 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-surface"
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "dark"}
      onClick={() => {
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem(storageKey, nextTheme);
        window.dispatchEvent(new Event("elegance-theme-change"));
      }}
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
