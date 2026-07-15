import { Link } from "react-router";
import type { Course } from "../../types/course.types";

const fallbackImage = "https://placehold.co/800x450/e1d3b6/11365b?text=CourseHub";

const CourseCard = ({ course }: { course: Course }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="aspect-video overflow-hidden bg-base-200">
      <img src={course.image || fallbackImage} alt={course.title} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackImage; }} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge badge-secondary badge-sm">{course.category}</span>
        <span className="badge badge-outline badge-sm">{course.level}</span>
        <span className="ml-auto text-sm font-semibold text-neutral" aria-label={`Rating ${course.rating} out of 5`}>★ {course.rating || "New"}</span>
      </div>
      <h2 className="mt-4 line-clamp-2 text-lg font-semibold leading-snug sm:text-xl">{course.title}</h2>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-base-content/65">{course.shortDescription}</p>
      <p className="mt-4 truncate text-sm text-base-content/60">By <span className="font-medium text-base-content">{course.instructorName}</span></p>
      <div className="mt-auto flex items-end justify-between gap-3 border-t border-base-300 pt-4">
        <div><p className="text-xs text-base-content/55">Price</p><p className="text-xl font-bold text-primary">৳{course.price.toLocaleString()}</p></div>
        <p className="max-w-28 truncate text-sm text-base-content/60">{course.duration}</p>
      </div>
      <Link to={`/courses/${course._id}`} className="btn btn-primary mt-4 w-full">View Details</Link>
    </div>
  </article>
);

export default CourseCard;
