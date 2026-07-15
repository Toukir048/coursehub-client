import { useState, type FormEvent } from "react";
import Container from "../../components/shared/Container";
import { useAuth } from "../../hooks/useAuth";
import type { Course } from "../../types/course.types";

const defaultCourseImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80";

const getSavedCourses = (): Course[] => {
  try {
    return JSON.parse(
      localStorage.getItem("coursehub-added-courses") ?? "[]",
    ) as Course[];
  } catch {
    return [];
  }
};

const AddCourse = () => {
  const { user } = useAuth();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!user) {
      setErrorMessage("You must be logged in to add a course.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const title = String(formData.get("title") ?? "").trim();

    const shortDescription = String(
      formData.get("shortDescription") ?? "",
    ).trim();

    const fullDescription = String(
      formData.get("fullDescription") ?? "",
    ).trim();

    const category = String(
      formData.get("category") ?? "",
    ).trim();

    const level = String(formData.get("level") ?? "").trim() as
      | "Beginner"
      | "Intermediate"
      | "Advanced";

    const price = Number(formData.get("price"));

    const duration = String(
      formData.get("duration") ?? "",
    ).trim();

    const image = String(formData.get("image") ?? "").trim();

    const learningOutcomesText = String(
      formData.get("learningOutcomes") ?? "",
    );

    const requirementsText = String(
      formData.get("requirements") ?? "",
    );

    if (title.length < 5) {
      setErrorMessage(
        "Course title must contain at least 5 characters.",
      );
      return;
    }

    if (shortDescription.length < 20) {
      setErrorMessage(
        "Short description must contain at least 20 characters.",
      );
      return;
    }

    if (fullDescription.length < 50) {
      setErrorMessage(
        "Full description must contain at least 50 characters.",
      );
      return;
    }

    if (!category) {
      setErrorMessage("Please select a course category.");
      return;
    }

    if (!level) {
      setErrorMessage("Please select a course level.");
      return;
    }

    if (Number.isNaN(price) || price < 0) {
      setErrorMessage("Please enter a valid course price.");
      return;
    }

    if (!duration) {
      setErrorMessage("Please enter the course duration.");
      return;
    }

    const learningOutcomes = learningOutcomesText
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    const requirements = requirementsText
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    const savedCourses = getSavedCourses();

    const newCourse: Course = {
      _id: crypto.randomUUID(),
      title,
      shortDescription,
      fullDescription,
      category,
      level,
      price,
      rating: 0,
      duration,
      image: image || defaultCourseImage,
      additionalImages: [],
      instructorName: user.name,
      totalStudents: 0,
      createdBy: user._id,
      createdAt: new Date().toISOString(),
      learningOutcomes,
      requirements,
      reviews: [],
    };

    localStorage.setItem(
      "coursehub-added-courses",
      JSON.stringify([...savedCourses, newCourse]),
    );

    setSuccessMessage("Course added successfully.");
    form.reset();
  };

  const handleReset = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <main className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <span className="badge border-0 bg-accent text-accent-content">
              Protected page
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Add a New Course
            </h1>

            <p className="mt-3 text-primary/70">
              Provide accurate and meaningful course information.
            </p>
          </div>

          {errorMessage && (
            <div className="alert alert-error mb-6">
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="alert alert-success mb-6">
              <span>{successMessage}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-8"
          >
            <label className="block">
              <span className="mb-2 block font-semibold text-primary">
                Course title
              </span>

              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="Example: React and TypeScript Fundamentals"
                minLength={5}
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-primary">
                Short description
              </span>

              <textarea
                name="shortDescription"
                className="textarea textarea-bordered min-h-24 w-full"
                placeholder="Write a short course summary"
                minLength={20}
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-primary">
                Full description
              </span>

              <textarea
                name="fullDescription"
                className="textarea textarea-bordered min-h-40 w-full"
                placeholder="Explain the course content and learning goals"
                minLength={50}
                required
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Category
                </span>

                <select
                  name="category"
                  className="select select-bordered w-full"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="Backend Development">
                    Backend Development
                  </option>

                  <option value="Programming">
                    Programming
                  </option>

                  <option value="Database">Database</option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Course level
                </span>

                <select
                  name="level"
                  className="select select-bordered w-full"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select level
                  </option>

                  <option value="Beginner">Beginner</option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">Advanced</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Price
                </span>

                <input
                  type="number"
                  name="price"
                  min={0}
                  className="input input-bordered w-full"
                  placeholder="Example: 2500"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Duration
                </span>

                <input
                  type="text"
                  name="duration"
                  className="input input-bordered w-full"
                  placeholder="Example: 8 weeks"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block font-semibold text-primary">
                Image URL
              </span>

              <input
                type="url"
                name="image"
                className="input input-bordered w-full"
                placeholder="https://example.com/course.jpg"
              />

              <span className="mt-2 block text-sm text-primary/60">
                A default course image will be used when this field is
                empty.
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-primary">
                Learning outcomes
              </span>

              <textarea
                name="learningOutcomes"
                className="textarea textarea-bordered min-h-32 w-full"
                placeholder={`Write one learning outcome per line
Create reusable React components
Use TypeScript interfaces
Build responsive layouts`}
              />

              <span className="mt-2 block text-sm text-primary/60">
                Write one learning outcome on each line.
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-primary">
                Requirements
              </span>

              <textarea
                name="requirements"
                className="textarea textarea-bordered min-h-32 w-full"
                placeholder={`Write one requirement per line
Basic JavaScript knowledge
A computer with VS Code installed`}
              />

              <span className="mt-2 block text-sm text-primary/60">
                Write one course requirement on each line.
              </span>
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="btn btn-primary flex-1"
              >
                Add Course
              </button>

              <button
                type="reset"
                onClick={handleReset}
                className="btn flex-1 border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default AddCourse;