import { useState, type FormEvent } from "react";
import Container from "../../components/shared/Container";
import { useAuth } from "../../contexts/AuthContext";

const AddCourse = () => {
  const { user } = useAuth();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const savedCourses = JSON.parse(
      localStorage.getItem("coursehub-added-courses") ?? "[]",
    );

    const newCourse = {
      _id: crypto.randomUUID(),
      title: formData.get("title"),
      shortDescription: formData.get("shortDescription"),
      fullDescription: formData.get("fullDescription"),
      category: formData.get("category"),
      price: Number(formData.get("price")),
      duration: formData.get("duration"),
      image: formData.get("image"),
      instructorName: user?.name,
      createdBy: user?._id,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "coursehub-added-courses",
      JSON.stringify([...savedCourses, newCourse]),
    );

    setSuccessMessage("Course added successfully.");
    form.reset();
  };

  return (
    <main className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <span className="badge bg-accent text-accent-content">
              Protected page
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Add a New Course
            </h1>

            <p className="mt-3 text-primary/70">
              Provide complete and accurate course information.
            </p>
          </div>

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
                  required
                >
                  <option value="">Select category</option>
                  <option>Web Development</option>
                  <option>Backend Development</option>
                  <option>Programming</option>
                  <option>Database</option>
                  <option>UI/UX Design</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Price
                </span>

                <input
                  type="number"
                  name="price"
                  min={0}
                  className="input input-bordered w-full"
                  placeholder="Course price"
                  required
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Add Course
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default AddCourse;