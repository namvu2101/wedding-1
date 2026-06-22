import Link from "next/link";

type EditorialButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
};

export function EditorialButton({
  href,
  children,
  variant = "primary",
}: EditorialButtonProps) {
  const variants = {
    primary:
      "border border-primary bg-primary text-surface hover:bg-secondary",
    ghost:
      "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-surface",
    light: "border border-white text-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`label-caps inline-flex min-h-12 items-center justify-center px-8 py-4 transition-colors duration-300 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
