import type { ReactNode } from "react";

interface FeedbackStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}

export const LoadingState = ({ label = "Loading…", compact = false }: { label?: string; compact?: boolean }) => (
  <div className={`flex items-center justify-center gap-3 ${compact ? "min-h-40" : "min-h-[50vh]"}`} role="status">
    <span className="loading loading-spinner loading-md text-primary" />
    <span className="text-sm text-base-content/65">{label}</span>
  </div>
);

export const ErrorState = ({ title, description, action, compact = false }: FeedbackStateProps) => (
  <div className={`rounded-2xl border border-error/20 bg-error/5 p-6 text-center ${compact ? "" : "sm:p-10"}`} role="alert">
    <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-error/10 text-xl font-bold text-error">!</div>
    <h2 className="mt-4 text-xl font-semibold">{title}</h2>
    {description && <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-base-content/65">{description}</p>}
    {action && <div className="mt-5">{action}</div>}
  </div>
);

export const EmptyState = ({ title, description, action, compact = false }: FeedbackStateProps) => (
  <div className={`rounded-2xl border border-dashed border-base-300 bg-base-100 p-6 text-center ${compact ? "" : "sm:p-10"}`}>
    <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-secondary text-xl font-bold text-secondary-content">C</div>
    <h2 className="mt-4 text-xl font-semibold">{title}</h2>
    {description && <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-base-content/65">{description}</p>}
    {action && <div className="mt-5">{action}</div>}
  </div>
);
