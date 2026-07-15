import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  centered?: boolean;
}

const PageHeader = ({ eyebrow, title, description, action, centered = false }: PageHeaderProps) => (
  <header className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}`}>
    <div className={centered ? "max-w-3xl" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral">{eyebrow}</p>}
      <h1 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl lg:text-5xl">{title}</h1>
      {description && <p className="mt-4 text-sm leading-relaxed text-base-content/65 sm:text-base">{description}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </header>
);

export default PageHeader;
