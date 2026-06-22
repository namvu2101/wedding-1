import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialButton } from "@/components/shared/EditorialButton";
import { getDictionary, isLocale, type Locale, withLocale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const page = dictionary.placeholderPages.services;
  const images = [
    dictionary.home.works.weddingItems[0],
    dictionary.home.works.weddingItems[1],
    dictionary.home.works.decorItems[0],
  ];
  const process =
    locale === "vi"
      ? ["Khám phá câu chuyện", "Định hướng concept", "Lập ngân sách & vendor", "Sản xuất & điều phối"]
      : ["Discovery", "Concept direction", "Budget & vendor curation", "Production & direction"];

  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell py-section-lg">
        <p className="label-caps text-secondary">{page.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-heading text-5xl leading-tight text-primary md:text-7xl">
          {page.title}
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {page.description}
        </p>
      </section>

      <section className="section-shell grid gap-8 pb-section-lg lg:grid-cols-3">
        {dictionary.home.services.items.map((service, index) => (
          <article key={service.title} className="bg-surface">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-dim">
              <Image
                src={images[index].image}
                alt={images[index].alt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="border border-primary/10 border-t-0 p-8">
              <p className="label-caps text-secondary">{service.eyebrow}</p>
              <h2 className="mt-5 font-heading text-3xl leading-tight text-primary">{service.title}</h2>
              <p className="mt-5 leading-8 text-muted">{service.description}</p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted">
                {(locale === "vi"
                  ? ["Creative brief riêng", "Timeline rõ theo tuần", "Điều phối vendor & rehearsal"]
                  : ["Tailored creative brief", "Clear weekly timeline", "Vendor and rehearsal direction"]
                ).map((item) => (
                  <li key={item} className="border-t border-primary/10 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-surface-container py-section-lg">
        <div className="section-shell">
          <p className="label-caps text-center text-secondary">{locale === "vi" ? "Quy trình" : "Process"}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <article key={step} className="border border-primary/10 bg-surface p-6">
                <p className="label-caps text-secondary">0{index + 1}</p>
                <h3 className="mt-5 font-heading text-2xl text-primary">{step}</h3>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <EditorialButton href={withLocale(locale, "/contact")}>
              {dictionary.placeholderActions.consultation}
            </EditorialButton>
          </div>
        </div>
      </section>
    </main>
  );
}
