import { useState } from "react";
import { Link } from "react-router";
import Container from "../../components/shared/Container";
import { useAuth } from "../../hooks/useAuth";
interface ManagedCourse {
  _id: string;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  category: string;
  price: number;
  duration: string;
  image?: string;
  instructorName?: string;
  createdBy: string;
  createdAt?: string;
}

const ManageCourses = () => {
  const { user } = useAuth();

  const getCourses = (): ManagedCourse[] => {
    try {
      const savedCourses = JSON.parse(
        localStorage.getItem("coursehub-added-courses") ?? "[]",
      ) as ManagedCourse[];

      return savedCourses.filter(
        (course) => course.createdBy === user?._id,
      );
    } catch {
      return [];
    }
  };

  const [managedCourses, setManagedCourses] =
    useState<ManagedCourse[]>(getCourses);

  const deleteCourse = (courseId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const allCourses = JSON.parse(
        localStorage.getItem("coursehub-added-courses") ?? "[]",
      ) as ManagedCourse[];

      const updatedCourses = allCourses.filter(
        (course) => course._id !== courseId,
      );

      localStorage.setItem(
        "coursehub-added-courses",
        JSON.stringify(updatedCourses),
      );

      setManagedCourses(
        updatedCourses.filter(
          (course) => course.createdBy === user?._id,
        ),
      );
    } catch {
      setManagedCourses([]);
    }
  };

  return (
    <main className="py-16">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="badge border-0 bg-accent text-accent-content">
              Protected page
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Manage My Courses
            </h1>

            <p className="mt-3 text-primary/70">
              View and delete courses added by your account.
            </p>
          </div>

          <Link to="/items/add" className="btn btn-primary">
            Add New Course
          </Link>
        </div>

        {managedCourses.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-primary/10 bg-base-100 p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-primary">
              No courses added yet
            </h2>

            <p className="mt-3 text-primary/70">
              Add your first course to start managing content.
            </p>

            <Link to="/items/add" className="btn btn-primary mt-6">
              Add Course
            </Link>
          </div>
        ) : (
          <div className="mt-10 overflow-x-auto rounded-2xl border border-primary/10 bg-base-100 shadow-sm">
            <table className="table min-w-[760px]">
              <thead className="bg-primary text-primary-content">
                <tr>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {managedCourses.map((course) => (
                  <tr key={course._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="size-12 overflow-hidden rounded-lg bg-base-300">
                            {course.image ? (
                              <img
                                src={course.image}
                                alt={course.title}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center font-bold text-primary">
                                {course.title.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                        </div>

                        <span className="max-w-56 truncate font-semibold text-primary">
                          {course.title}
                        </span>
                      </div>
                    </td>

                    <td>{course.category}</td>
                    <td>৳{course.price}</td>
                    <td>{course.duration}</td>

                    <td>
                      <div className="flex gap-2">
                        <Link
                          to={`/courses/${course._id}`}
                          className="btn btn-sm border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content"
                        >
                          View
                        </Link>

                        <button
                          type="button"
                          onClick={() => deleteCourse(course._id)}
                          className="btn btn-error btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </main>
  );
};

export default ManageCourses;