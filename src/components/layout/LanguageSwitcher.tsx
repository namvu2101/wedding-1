"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  switchLocalePath,
  type Locale,
} from "@/lib/content";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className="inline-flex rounded-full border border-primary/10 bg-surface-container-low p-1"
      aria-label={label}
    >
      {(["vi", "en"] as const).map((locale) => (
        <Link
          key={locale}
          href={switchLocalePath(pathname, locale)}
          className={`label-caps inline-flex min-h-12 min-w-14 items-center justify-center rounded-full px-4 transition-colors ${
            locale === currentLocale
              ? "bg-primary text-surface"
              : "text-muted hover:text-primary"
          }`}
          aria-current={locale === currentLocale ? "true" : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
