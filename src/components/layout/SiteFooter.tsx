import Link from "next/link";
import { getDictionary, type Locale, withLocale } from "@/lib/content";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const dictionary = getDictionary(locale);

  return (
    <footer className="bg-surface-container">
      <div className="section-shell grid gap-12 py-section-md sm:grid-cols-2 lg:grid-cols-5 lg:gap-10 md:py-section-lg">
        <div>
          <Link
            href={withLocale(locale, "/")}
            className="font-heading text-3xl text-primary"
          >
            {dictionary.brand.name}
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            {dictionary.footer.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="label-caps text-primary">
            {dictionary.footer.linksHeading}
          </h2>
          {dictionary.navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={withLocale(locale, link.href)}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="label-caps text-primary">
            {dictionary.footer.supportHeading}
          </h2>
          {dictionary.footer.supportLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={withLocale(locale, link.href)}
              className="text-sm text-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <address className="not-italic">
          <h2 className="label-caps text-primary">
            {dictionary.footer.officeHeading}
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            {dictionary.footer.office.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="mt-4 text-sm text-muted">
            {dictionary.footer.office.email}
          </p>
          <p className="mt-2 text-sm text-muted">
            {dictionary.footer.office.phone}
          </p>
        </address>

        <div className="flex flex-col gap-4">
          <h2 className="label-caps text-primary">
            {dictionary.footer.socialHeading}
          </h2>
          {dictionary.footer.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary/10 px-6 py-8 text-center">
        <p className="label-caps text-[0.625rem] text-muted">
          {dictionary.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
