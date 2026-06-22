"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  switchLocalePath,
  type Locale,
  withLocale,
} from "@/lib/content";
import type { getDictionary } from "@/lib/content";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

type MobileMenuProps = {
  dictionary: ReturnType<typeof getDictionary>;
  locale: Locale;
};

export function MobileMenu({ dictionary, locale }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center"
        aria-label={dictionary.navAria.open}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
          <span className="h-0.5 w-full bg-primary" />
          <span className="h-0.5 w-full bg-primary" />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex min-h-dvh flex-col overflow-y-auto bg-surface/95 px-6 py-6 text-primary backdrop-blur-xl sm:px-8 sm:py-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading text-3xl tracking-[0.25em] uppercase">
                {dictionary.brand.name}
              </p>
              <p className="label-caps mt-2 text-muted">
                {dictionary.brand.descriptor}
              </p>
            </div>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center text-3xl"
              aria-label={dictionary.navAria.close}
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col items-center justify-center gap-5 py-10 sm:gap-7"
            aria-label={dictionary.navAria.mobile}
          >
            {dictionary.navLinks.map((link) => {
              const localizedHref = withLocale(locale, link.href);
              const active = pathname === localizedHref;

              return (
                <Link
                  key={link.href}
                  href={localizedHref}
                  className={`font-heading text-3xl transition-transform hover:scale-105 sm:text-4xl ${
                    active ? "text-primary" : "text-muted"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex rounded-full border border-primary/10 bg-surface-container-low p-1">
            {(["vi", "en"] as const).map((item) => (
              <Link
                key={item}
                href={switchLocalePath(pathname, item)}
                className={`label-caps inline-flex min-h-12 min-w-14 items-center justify-center rounded-full px-4 transition-colors ${
                  item === locale ? "bg-primary text-surface" : "text-muted hover:text-primary"
                }`}
                aria-current={item === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.toUpperCase()}
              </Link>
            ))}
            </div>
            <ThemeToggle />
          </div>

          <Link
            href={withLocale(locale, "/contact")}
            className="label-caps mx-auto mb-6 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-surface"
            onClick={() => setOpen(false)}
          >
            {dictionary.header.mobileCta}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
