import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, isLocale, type Locale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const page = dictionary.placeholderPages.contact;
  const office = dictionary.footer.office;

  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell grid gap-section-md py-section-lg lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow={page.eyebrow} title={page.title} />
          <p className="mt-8 max-w-xl text-base leading-8 text-muted md:text-lg">
            {page.description}
          </p>
          <div className="mt-10 grid gap-6 border-t border-primary/10 pt-8 text-muted">
            <div>
              <p className="label-caps text-secondary">{dictionary.footer.officeHeading}</p>
              <p className="mt-3 leading-8">{office.address.join(", ")}</p>
            </div>
            <div>
              <p className="label-caps text-secondary">Email</p>
              <a className="mt-3 inline-flex border-b border-primary/30 text-primary" href={`mailto:${office.email}`}>
                {office.email}
              </a>
            </div>
            <div>
              <p className="label-caps text-secondary">Phone</p>
              <a className="mt-3 inline-flex border-b border-primary/30 text-primary" href={`tel:${office.phone.replaceAll(" ", "")}`}>
                {office.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="border border-primary/10 bg-surface p-6 md:p-10">
          <ContactForm locale={locale} />
        </div>
      </section>
    </main>
  );
}
