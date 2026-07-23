"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dictionary, type Lang } from "@/lib/translations";

const STORAGE_KEY = "wedding-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with "hy" so server and first client render match (no hydration
  // mismatch); the real preference is resolved in the effect below.
  const [lang, setLangState] = useState<Lang>("hy");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "hy") {
      setLangState(saved);
      return;
    }
    // Geo-detect by timezone: visitors in Armenia get Armenian, everyone
    // else (e.g. USA) gets English.
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    setLangState(tz === "Asia/Yerevan" ? "hy" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage failures (e.g. private mode)
    }
  }, []);

  const toggle = useCallback(
    () => setLangState((cur) => (cur === "en" ? "hy" : "en")),
    [],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggle }),
    [lang, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/** Returns the dictionary for the current language. */
export function useT(): Dictionary {
  const { lang } = useLang();
  return translations[lang];
}
