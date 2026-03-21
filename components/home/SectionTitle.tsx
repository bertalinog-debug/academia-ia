type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="text-sm text-white/50">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-white/65">{description}</p>
      ) : null}
    </div>
  );
}