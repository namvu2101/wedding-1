import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialButton } from "@/components/shared/EditorialButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, isLocale, type Locale, withLocale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function JournalPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const page = dictionary.placeholderPages.journal;
  const posts = dictionary.home.journal.posts;

  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell py-section-lg">
        <SectionHeading eyebrow={page.eyebrow} title={page.title} />
        <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {page.description}
        </p>
      </section>

      <section className="section-shell grid gap-10 pb-section-lg lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="border border-primary/10 bg-surface">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-dim">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <p className="label-caps text-secondary">{post.date}</p>
              <h2 className="mt-5 font-heading text-3xl leading-tight text-primary">{post.title}</h2>
              <p className="mt-5 leading-8 text-muted">{post.excerpt}</p>
              <div className="mt-8">
                <EditorialButton href={withLocale(locale, "/contact")} variant="ghost">
                  {dictionary.home.journal.cta}
                </EditorialButton>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
