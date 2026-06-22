import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { getDictionary, type Locale, withLocale } from "@/lib/content";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const dictionary = getDictionary(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 xl:px-page-desktop">
        <Link
          href={withLocale(locale, "/")}
          className="font-heading text-2xl tracking-[0.25em] text-primary uppercase"
          aria-label={dictionary.brand.homeAria}
        >
          {dictionary.brand.name}
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-8"
          aria-label={dictionary.navAria.main}
        >
          {dictionary.navLinks.map((link) => (
            <Link
              key={link.href}
              href={withLocale(locale, link.href)}
              className="label-caps text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <LanguageSwitcher
            currentLocale={locale}
            label={dictionary.navAria.currentLanguage}
          />
          <ThemeToggle />
          <Link
            href={withLocale(locale, "/contact")}
            className="label-caps border border-primary/20 px-4 py-3 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-surface xl:px-5"
          >
            {dictionary.header.consultation}
          </Link>
        </div>

        <MobileMenu dictionary={dictionary} locale={locale} />
      </div>
    </header>
  );
}
