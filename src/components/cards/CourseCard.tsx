import { Link } from "react-router";
import type { Course } from "../../types/course.types";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={course.image || "https://placehold.co/800x450?text=CourseHub"}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-content">
            {course.category}
          </span>

          <span className="text-sm font-medium text-primary/70">
            ★ {course.rating}
          </span>
        </div>

        <h2 className="mt-4 line-clamp-2 text-xl font-bold text-primary">
          {course.title}
        </h2>

        <p className="mt-3 line-clamp-3 flex-1 leading-6 text-primary/70">
          {course.shortDescription}
        </p>
        <p className="mt-3 text-sm text-primary/60">{course.level} · {course.instructorName}</p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-primary/10 pt-4 text-sm">
          <div>
            <p className="text-primary/50">Price</p>
            <p className="font-bold text-neutral">৳{course.price}</p>
          </div>

          <div>
            <p className="text-primary/50">Duration</p>
            <p className="font-semibold text-primary">{course.duration}</p>
          </div>
        </div>

        <Link
          to={`/courses/${course._id}`}
          className="btn btn-primary mt-5 w-full"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
