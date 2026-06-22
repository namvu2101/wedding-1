type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <p className="label-caps text-secondary">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl leading-tight text-primary md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
