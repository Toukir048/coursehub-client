import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import Container from "../../components/shared/Container";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (name.trim().length < 3) {
      setError("Name must contain at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      await register({ name: name.trim(), email, password, image: image.trim() });
      navigate("/dashboard", { replace: true });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to register. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center py-16">
      <Container>
        <div className="mx-auto max-w-lg rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <span className="badge border-0 bg-accent text-accent-content">
              Join CourseHub
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary">
              Create your account
            </h1>

            <p className="mt-2 text-primary/70">
              Register to add and manage your courses.
            </p>
          </div>

          {error && (
            <div className="alert alert-error mt-6">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block font-medium text-primary">
                Full name
              </span>

              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-primary">
                Email address
              </span>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-primary">
                Image URL <span className="font-normal text-primary/60">(optional)</span>
              </span>

              <input
                type="url"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-primary">
                Password
              </span>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="input input-bordered w-full"
                minLength={6}
                required
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting && <span className="loading loading-spinner" />}
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-primary/70">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-neutral hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Register;
