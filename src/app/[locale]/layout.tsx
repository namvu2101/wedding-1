import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  getDictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/content";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  return getDictionary(localeParam).metadata;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <>
      <a href="#main-content" className="skip-link label-caps">
        {dictionary.skipLink}
      </a>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
