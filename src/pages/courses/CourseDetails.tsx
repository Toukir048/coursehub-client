import { Link, useParams } from "react-router";
import CourseCard from "../../components/cards/CourseCard";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { courses } from "../../data/courses.data";
import type { Course } from "../../types/course.types";

const getSavedCourses = (): Course[] => {
  try {
    return JSON.parse(
      localStorage.getItem("coursehub-added-courses") ?? "[]",
    ) as Course[];
  } catch {
    return [];
  }
};

const CourseDetails = () => {
  const { id } = useParams();

  const savedCourses = getSavedCourses();
  const allCourses: Course[] = [...courses, ...savedCourses];

  const course = allCourses.find((item) => item._id === id);

  if (!course) {
    return (
      <main className="py-16">
        <Container>
          <div className="rounded-2xl border border-primary/10 bg-base-100 p-10 text-center shadow-sm">
            <h1 className="text-3xl font-bold text-primary">
              Course not found
            </h1>

            <p className="mt-3 text-primary/70">
              The requested course is unavailable.
            </p>

            <Link to="/courses" className="btn btn-primary mt-6">
              Browse Courses
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const additionalImages = course.additionalImages ?? [];
  const learningOutcomes = course.learningOutcomes ?? [];
  const requirements = course.requirements ?? [];
  const reviews = course.reviews ?? [];

  const relatedCourses = allCourses
    .filter(
      (item) =>
        item.category === course.category &&
        item._id !== course._id,
    )
    .slice(0, 4);

  return (
    <main>
      {/* Course hero */}
      <section className="bg-primary py-14 text-primary-content">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-content">
                {course.category}
              </span>

              <h1 className="mt-5 text-4xl leading-tight font-bold lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-primary-content/75">
                {course.shortDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm">
                <span>
                  ★{" "}
                  {course.rating > 0
                    ? course.rating
                    : "Not rated yet"}
                </span>

                <span>
                  {course.totalStudents ?? 0} learners
                </span>

                <span>{course.duration}</span>
              </div>

              <p className="mt-5 text-primary-content/75">
                Instructor:{" "}
                <strong className="text-primary-content">
                  {course.instructorName}
                </strong>
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-secondary p-3 shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="h-72 w-full rounded-2xl object-cover sm:h-80"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Details content */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              {/* Overview */}
              <article className="rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-primary">
                  Course Overview
                </h2>

                <p className="mt-4 leading-8 text-primary/75">
                  {course.fullDescription}
                </p>
              </article>

              {/* Gallery */}
              <article className="rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-primary">
                  Course Gallery
                </h2>

                {additionalImages.length > 0 ? (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {additionalImages.map(
                      (image: string, index: number) => (
                        <img
                          key={`${image}-${index}`}
                          src={image}
                          alt={`${course.title} learning view ${index + 1}`}
                          className="h-56 w-full rounded-xl object-cover"
                        />
                      ),
                    )}
                  </div>
                ) : (
                  <div className="mt-6 rounded-xl bg-base-200 p-6 text-center">
                    <p className="text-primary/70">
                      No additional course images are available.
                    </p>
                  </div>
                )}
              </article>

              {/* Outcomes and requirements */}
              <div className="grid gap-8 md:grid-cols-2">
                <article className="rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-primary">
                    What You Will Learn
                  </h2>

                  {learningOutcomes.length > 0 ? (
                    <ul className="mt-5 space-y-3">
                      {learningOutcomes.map(
                        (outcome: string, index: number) => (
                          <li
                            key={`${outcome}-${index}`}
                            className="flex gap-3 text-primary/75"
                          >
                            <span className="font-bold text-neutral">
                              ✓
                            </span>

                            <span>{outcome}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  ) : (
                    <p className="mt-5 text-primary/70">
                      Learning outcomes have not been added yet.
                    </p>
                  )}
                </article>

                <article className="rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-primary">
                    Requirements
                  </h2>

                  {requirements.length > 0 ? (
                    <ul className="mt-5 space-y-3">
                      {requirements.map(
                        (requirement: string, index: number) => (
                          <li
                            key={`${requirement}-${index}`}
                            className="flex gap-3 text-primary/75"
                          >
                            <span className="font-bold text-neutral">
                              •
                            </span>

                            <span>{requirement}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  ) : (
                    <p className="mt-5 text-primary/70">
                      No special requirements have been added.
                    </p>
                  )}
                </article>
              </div>

              {/* Reviews */}
              <article className="rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-primary">
                    Reviews and Ratings
                  </h2>

                  <span className="badge badge-primary badge-lg">
                    ★ {course.rating}
                  </span>
                </div>

                {reviews.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="rounded-xl bg-base-200 p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h3 className="font-bold text-primary">
                              {review.userName}
                            </h3>

                            <p className="text-sm text-primary/50">
                              {review.date}
                            </p>
                          </div>

                          <span className="font-semibold text-neutral">
                            ★ {review.rating}
                          </span>
                        </div>

                        <p className="mt-4 leading-7 text-primary/75">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-primary/70">
                    This course has not received a written review yet.
                  </p>
                )}
              </article>
            </div>

            {/* Course specifications */}
            <aside className="h-fit rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm lg:sticky lg:top-28">
              <p className="text-sm font-medium text-primary/60">
                Course price
              </p>

              <p className="mt-1 text-4xl font-bold text-neutral">
                ৳{course.price}
              </p>

              <div className="mt-6 space-y-4 border-y border-primary/10 py-5">
                <div className="flex justify-between gap-3">
                  <span className="text-primary/60">Level</span>

                  <strong className="text-primary">
                    {course.level}
                  </strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-primary/60">
                    Duration
                  </span>

                  <strong className="text-primary">
                    {course.duration}
                  </strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-primary/60">
                    Students
                  </span>

                  <strong className="text-primary">
                    {course.totalStudents ?? 0}
                  </strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-primary/60">
                    Category
                  </span>

                  <strong className="text-right text-primary">
                    {course.category}
                  </strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-primary/60">
                    Instructor
                  </span>

                  <strong className="text-right text-primary">
                    {course.instructorName}
                  </strong>
                </div>
              </div>

              <Link
                to="/register"
                className="btn btn-primary mt-6 w-full"
              >
                Join CourseHub
              </Link>

              <Link
                to="/courses"
                className="btn mt-3 w-full border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content"
              >
                Back to Courses
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related courses */}
      <section className="bg-base-100 py-16">
        <Container>
          <SectionTitle
            title="Related Courses"
            description="Explore additional courses from the same learning category."
          />

          {relatedCourses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard
                  key={relatedCourse._id}
                  course={relatedCourse}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-base-200 p-8 text-center">
              <p className="text-primary/70">
                No additional course is currently available in this
                category.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default CourseDetails;