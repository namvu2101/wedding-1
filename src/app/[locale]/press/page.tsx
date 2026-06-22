import { notFound } from "next/navigation";
import { EditorialButton } from "@/components/shared/EditorialButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, isLocale, type Locale, withLocale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PressPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const page = dictionary.placeholderPages.press;
  const press =
    locale === "vi"
      ? [
          ["Vogue Weddings", "Một lễ cưới Việt Nam hiện đại với tinh thần quiet luxury."],
          ["The Lane", "Destination wedding tại Việt Nam đang bước vào thời kỳ tinh tế hơn."],
          ["Harper's Bazaar Bride", "Wedding và nghệ thuật điều phối không phô trương."],
        ]
      : [
          ["Vogue Weddings", "A modern Vietnamese wedding with a quiet luxury sensibility."],
          ["The Lane", "Destination weddings in Vietnam are entering a more refined era."],
          ["Harper's Bazaar Bride", "Wedding and the art of discreet production."],
        ];

  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell py-section-lg">
        <SectionHeading eyebrow={page.eyebrow} title={page.title} />
        <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {page.description}
        </p>
      </section>

      <section className="section-shell grid gap-6 pb-section-lg md:grid-cols-3">
        {press.map(([outlet, title], index) => (
          <article key={outlet} className="border border-primary/10 bg-surface p-8">
            <p className="label-caps text-secondary">202{6 - index}</p>
            <h2 className="mt-6 font-heading text-3xl text-primary">{outlet}</h2>
            <p className="mt-5 leading-8 text-muted">{title}</p>
          </article>
        ))}
      </section>

      <section className="bg-surface-container py-section-lg">
        <div className="section-shell">
          <p className="label-caps text-center text-secondary">{dictionary.home.pressPraise.eyebrow}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dictionary.home.pressPraise.testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="border border-primary/10 bg-surface p-8">
                <blockquote className="font-heading text-2xl leading-snug text-primary">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="label-caps mt-8 text-secondary">- {testimonial.author} -</figcaption>
              </figure>
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
