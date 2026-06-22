import { notFound, redirect } from "next/navigation";
import { isLocale, type Locale, withLocale } from "@/lib/content";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PortfolioPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  redirect(withLocale(locale, "/works"));
}
