import { EditorialButton } from "@/components/shared/EditorialButton";
import { type Locale, withLocale } from "@/lib/content";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  locale: Locale;
  consultationLabel: string;
  homeLabel: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  locale,
  consultationLabel,
  homeLabel,
}: PlaceholderPageProps) {
  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell flex min-h-[72vh] items-center py-section-lg">
        <div className="max-w-4xl">
          <p className="label-caps text-secondary">{eyebrow}</p>
          <h1 className="mt-6 font-heading text-5xl leading-tight text-primary md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <EditorialButton href={withLocale(locale, "/contact")}>
              {consultationLabel}
            </EditorialButton>
            <EditorialButton href={withLocale(locale, "/")} variant="ghost">
              {homeLabel}
            </EditorialButton>
          </div>
        </div>
      </section>
    </main>
  );
}
