import { notFound } from "next/navigation";
import { EditorialButton } from "@/components/shared/EditorialButton";
import { PortfolioCard } from "@/components/shared/PortfolioCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, isLocale, type Locale, withLocale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function WorksPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const works = dictionary.home.works;

  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell py-section-lg">
        <SectionHeading eyebrow={works.eyebrow} title={works.title} />
        <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {works.description}
        </p>
        <div className="mt-section-md grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.weddingItems.map((project, index) => (
            <PortfolioCard key={project.title} {...project} storyLabel={works.storyLabel} offset={index === 1} />
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-section-lg">
        <div className="section-shell">
          <SectionHeading eyebrow={works.eyebrow} title={works.secondaryTitle} />
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
            {works.secondaryDescription}
          </p>
          <div className="mt-section-md grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {works.decorItems.map((project) => (
              <PortfolioCard key={project.title} {...project} storyLabel={works.storyLabel} />
            ))}
          </div>
          <div className="mt-12">
            <EditorialButton href={withLocale(locale, "/contact")} variant="ghost">
              {dictionary.placeholderActions.consultation}
            </EditorialButton>
          </div>
        </div>
      </section>
    </main>
  );
}
