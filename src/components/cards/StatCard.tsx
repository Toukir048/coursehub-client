interface StatCardProps { label: string; value: string | number; description?: string; }

const StatCard = ({ label, value, description }: StatCardProps) => (
  <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
    <p className="text-sm font-medium text-base-content/60">{label}</p>
    <p className="mt-2 text-3xl font-bold tracking-tight text-primary">{value}</p>
    {description && <p className="mt-2 text-xs text-base-content/55">{description}</p>}
  </article>
);

export default StatCard;
