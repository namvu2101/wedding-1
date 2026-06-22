import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialButton } from "@/components/shared/EditorialButton";
import { PortfolioCard } from "@/components/shared/PortfolioCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  getDictionary,
  isLocale,
  type Locale,
  withLocale,
} from "@/lib/content";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const home = dictionary.home;

  return (
    <main id="main-content">
      <section className="relative flex min-h-[88svh] items-end overflow-hidden text-white md:min-h-dvh md:items-center">
        <Image
          src={home.hero.image}
          alt={home.hero.alt}
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-primary/45" />
        <div className="section-shell relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
          <p className="label-caps max-w-3xl tracking-[0.32em]">
            {home.hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl font-heading text-5xl leading-tight md:text-7xl lg:text-8xl">
            {home.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base font-light leading-8 text-white/85 md:text-lg">
            {home.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <EditorialButton href={withLocale(locale, "/contact")}>
              {home.hero.primaryCta}
            </EditorialButton>
            <EditorialButton href={withLocale(locale, "/works")} variant="light">
              {home.hero.secondaryCta}
            </EditorialButton>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-section-md py-section-lg md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <p className="label-caps text-secondary">{home.intro.eyebrow}</p>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-primary md:text-5xl">
            {home.intro.title}
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg font-light leading-9 text-muted">
            {home.intro.description}
          </p>
          <div className="mt-8">
            <EditorialButton href={withLocale(locale, "/about")} variant="ghost">
              {home.intro.cta}
            </EditorialButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-section-lg">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              eyebrow={home.services.eyebrow}
              title={home.services.title}
              align="center"
            />
            <p className="mt-6 text-base leading-8 text-muted md:text-lg">
              {home.services.description}
            </p>
          </div>
          <div className="mt-section-md grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.services.items.map((service, index) => (
              <article
                key={service.title}
                className={`border border-primary/10 bg-surface p-8 md:p-10 ${
                  index === 1 ? "lg:-translate-y-8" : ""
                }`}
              >
                <p className="label-caps text-secondary">{service.eyebrow}</p>
                <h3 className="mt-6 font-heading text-2xl text-primary">
                  {service.title}
                </h3>
                <p className="mt-5 leading-8 text-muted">
                  {service.description}
                </p>
                <div className="mt-8">
                  <EditorialButton
                    href={withLocale(locale, "/services")}
                    variant="ghost"
                  >
                    {home.services.cta}
                  </EditorialButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-section-lg">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow={home.works.eyebrow}
              title={home.works.title}
            />
          </div>
          <p className="text-base leading-8 text-muted md:col-span-6 md:col-start-7">
            {home.works.description}
          </p>
        </div>
        <div className="mt-section-md grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {home.works.weddingItems.map((project, index) => (
            <PortfolioCard
              key={project.title}
              {...project}
              storyLabel={home.works.storyLabel}
              offset={index === 1}
            />
          ))}
        </div>
        <div className="mt-10">
          <EditorialButton href={withLocale(locale, "/works")} variant="ghost">
            {home.works.primaryCta}
          </EditorialButton>
        </div>
      </section>

      <section className="bg-surface-container-high py-section-lg">
        <div className="section-shell grid gap-section-md lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="label-caps text-secondary">{home.works.eyebrow}</p>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-primary md:text-5xl">
              {home.works.secondaryTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-muted md:text-lg">
              {home.works.secondaryDescription}
            </p>
            <div className="mt-8">
              <EditorialButton href={withLocale(locale, "/works")} variant="ghost">
                {home.works.secondaryCta}
              </EditorialButton>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {home.works.decorItems.map((project) => (
              <PortfolioCard
                key={project.title}
                {...project}
                storyLabel={home.works.storyLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-primary/10 py-section-md">
        <p className="label-caps text-center text-secondary">
          {home.partners.eyebrow}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6">
          {home.partners.names.map((name) => (
            <div
              key={name}
              className="label-caps flex min-h-20 items-center justify-center border border-primary/10 bg-surface-container-low px-4 text-[0.625rem] text-muted"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-section-lg">
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow={home.pressPraise.eyebrow}
                title={home.pressPraise.title}
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:col-span-5 md:col-start-8 md:justify-end">
              <EditorialButton href={withLocale(locale, "/press")} variant="ghost">
                {home.pressPraise.ctaPress}
              </EditorialButton>
              <EditorialButton href={withLocale(locale, "/press")} variant="ghost">
                {home.pressPraise.ctaPraise}
              </EditorialButton>
            </div>
          </div>
          <div className="mt-section-md grid gap-6 md:grid-cols-3">
            {home.pressPraise.testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="border border-primary/10 bg-surface p-8"
              >
                <blockquote className="font-heading text-2xl leading-snug text-primary">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="label-caps mt-8 text-secondary">
                  - {testimonial.author} -
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-section-lg">
        <SectionHeading
          eyebrow={home.journal.eyebrow}
          title={home.journal.title}
          align="center"
        />
        <div className="mt-section-md grid gap-10 lg:grid-cols-2">
          {home.journal.posts.map((post) => (
            <article
              key={post.title}
              className="grid gap-6 sm:grid-cols-[0.9fr_1fr] sm:items-center"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-surface-dim">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <p className="label-caps text-[0.625rem] text-secondary">
                  {post.date}
                </p>
                <h3 className="mt-3 font-heading text-2xl leading-tight text-primary">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-5">
                  <EditorialButton
                    href={withLocale(locale, "/journal")}
                    variant="ghost"
                  >
                    {home.journal.cta}
                  </EditorialButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-section-lg text-center text-surface">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/mockdata/couple.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="section-shell relative z-10">
          <p className="font-heading text-3xl italic text-champagne">
            {home.finalCta.kicker}
          </p>
          <h2 className="mx-auto mt-2 max-w-4xl font-heading text-5xl leading-tight md:text-7xl">
            {home.finalCta.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-surface/80">
            {home.finalCta.description}
          </p>
          <div className="mt-10">
            <EditorialButton href={withLocale(locale, "/contact")} variant="light">
              {home.finalCta.cta}
            </EditorialButton>
          </div>
        </div>
      </section>
    </main>
  );
}
