import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  couple?: string;
  location: string;
  image: string;
  alt: string;
  storyLabel: string;
  offset?: boolean;
};

export function PortfolioCard({
  title,
  couple,
  location,
  image,
  alt,
  storyLabel,
  offset = false,
}: PortfolioCardProps) {
  return (
    <article className={offset ? "lg:translate-y-12" : undefined}>
      <div className="ken-burns group relative aspect-[4/5] overflow-hidden bg-surface-dim">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="label-caps border border-white px-6 py-3 text-white">
            {storyLabel}
          </span>
        </div>
      </div>
      <p className="label-caps mt-6 text-[0.625rem] text-secondary">
        {couple ? `${couple} | ${location}` : location}
      </p>
      <h3 className="mt-2 font-heading text-2xl leading-snug text-primary">
        {title}
      </h3>
    </article>
  );
}
