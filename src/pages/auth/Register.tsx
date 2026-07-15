import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import Container from "../../components/shared/Container";
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const confirmPassword = String(
      formData.get("confirmPassword"),
    );

    if (name.trim().length < 3) {
      setError("Name must contain at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    register({ name, email, password });
    navigate("/");
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
                name="name"
                placeholder="Enter your full name"
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
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-primary">
                Password
              </span>

              <input
                type="password"
                name="password"
                placeholder="Minimum 6 characters"
                className="input input-bordered w-full"
                minLength={6}
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-primary">
                Confirm password
              </span>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter password again"
                className="input input-bordered w-full"
                minLength={6}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary w-full">
              Create Account
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