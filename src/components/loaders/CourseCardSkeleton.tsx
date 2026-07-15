const CourseCardSkeleton = () => {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm" aria-hidden="true">
      <div className="skeleton aspect-video w-full rounded-none" />

      <div className="space-y-4 p-5">
        <div className="flex justify-between">
          <div className="skeleton h-6 w-28" />
          <div className="skeleton h-6 w-14" />
        </div>

        <div className="skeleton h-7 w-full" />
        <div className="skeleton h-7 w-3/4" />

        <div className="space-y-2">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-2/3" />
        </div>

        <div className="skeleton h-12 w-full" />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
