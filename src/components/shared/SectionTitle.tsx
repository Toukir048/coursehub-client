interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  title,
  description,
  align = "center",
}: SectionTitleProps) => {
  const alignmentClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl ${alignmentClass}`}>
      <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-content">
        CourseHub
      </span>

      <h2 className="text-3xl font-bold text-primary md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 leading-7 text-primary/70">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;