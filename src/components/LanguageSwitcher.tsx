"use client";

import { useLocale, Locale } from "@/i18n/LocaleProvider";

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <label className="inline-flex items-center gap-2 text-sm text-gray-300">
      <span className="hidden md:inline">Language:</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="bg-black/30 border border-white/10 rounded-full px-3 py-1 outline-none"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.code} value={opt.code} className="text-black">
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}


