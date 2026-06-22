import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialButton } from "@/components/shared/EditorialButton";
import { getDictionary, isLocale, type Locale, withLocale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const page = dictionary.placeholderPages.about;
  const values =
    locale === "vi"
      ? ["Gu thẩm mỹ có kỷ luật", "Vận hành bình tĩnh", "Tôn trọng văn hoá gia đình", "Trải nghiệm khách mời"]
      : ["Disciplined taste", "Calm production", "Family-cultural fluency", "Guest experience"];
  const milestones =
    locale === "vi"
      ? [
          ["2018", "Bắt đầu từ các lễ cưới thân mật tại Hà Nội và Sài Gòn."],
          ["2021", "Mở rộng sang destination wedding tại Phú Quốc, Đà Lạt và Nha Trang."],
          ["2024", "Xây dựng production framework cho lễ cưới nhiều ngày."],
          ["2026", "Tập trung vào tư vấn, thiết kế và điều phối trọn gói."],
        ]
      : [
          ["2018", "Started with intimate weddings in Hanoi and Saigon."],
          ["2021", "Expanded destination work across Phu Quoc, Da Lat, and Nha Trang."],
          ["2024", "Built a production framework for multi-day celebrations."],
          ["2026", "Focused on full planning, design direction, and event production."],
        ];

  return (
    <main id="main-content" className="pt-20">
      <section className="section-shell grid min-h-[72vh] gap-section-md py-section-lg lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="label-caps text-secondary">{page.eyebrow}</p>
          <h1 className="mt-6 font-heading text-5xl leading-tight text-primary md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {page.description}
          </p>
          <div className="mt-10">
            <EditorialButton href={withLocale(locale, "/contact")}>
              {dictionary.placeholderActions.consultation}
            </EditorialButton>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-surface-dim">
          <Image
            src={dictionary.home.hero.image}
            alt={dictionary.home.hero.alt}
            fill
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-surface-container py-section-lg">
        <div className="section-shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-caps text-secondary">{locale === "vi" ? "Triết lý" : "Point of view"}</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-primary md:text-5xl">
              {locale === "vi" ? "Đẹp thôi là chưa đủ." : "Beauty is only the beginning."}
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-muted md:text-lg lg:col-span-7 lg:col-start-6">
            <p>
              {locale === "vi"
                ? "Chúng tôi nhìn lễ cưới như một hệ sinh thái: câu chuyện của cặp đôi, nhịp của gia đình, hành trình khách mời, địa điểm, chất liệu, ánh sáng và từng phút vận hành."
                : "We see a wedding as an ecosystem: the couple's story, family rhythm, guest journey, place, material, light, and every minute of production."}
            </p>
            <p>
              {locale === "vi"
                ? "Mục tiêu là một ngày cưới có vẻ đẹp vừa đủ, cảm xúc đủ sâu, và được điều phối nhẹ đến mức chủ tiệc có thể thật sự hiện diện."
                : "The goal is a celebration with enough beauty, enough feeling, and production so calm that the hosts can actually be present."}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-section-lg">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article key={value} className="border border-primary/10 bg-surface p-8">
              <p className="label-caps text-secondary">0{index + 1}</p>
              <h3 className="mt-6 font-heading text-3xl leading-tight text-primary">{value}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-primary/10 py-section-lg">
        <p className="label-caps text-center text-secondary">{locale === "vi" ? "Cột mốc" : "Milestones"}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {milestones.map(([year, text]) => (
            <article key={year} className="border-l border-primary/20 pl-6">
              <strong className="font-heading text-4xl font-normal text-primary">{year}</strong>
              <p className="mt-4 leading-8 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
