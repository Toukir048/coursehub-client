interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  eyebrow = "CourseHub",
  title,
  description,
  align = "center",
}: SectionTitleProps) => {
  const alignmentClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-8 max-w-2xl sm:mb-10 ${alignmentClass}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral">{eyebrow}</p>

      <h2 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-base-content/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
