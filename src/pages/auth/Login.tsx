import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Container from "../../components/shared/Container";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const demoEmail = import.meta.env.VITE_DEMO_EMAIL;
  const demoPassword = import.meta.env.VITE_DEMO_PASSWORD;
  const hasDemoAccount = Boolean(demoEmail && demoPassword);

  const destination =
    (location.state as { from?: string } | null)?.from ?? "/dashboard";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    setIsSubmitting(true);
    try {
      await login({ email, password });
      navigate(destination, { replace: true });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to log in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center py-16">
      <Container>
        <div className="mx-auto max-w-md rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <span className="badge border-0 bg-accent text-accent-content">
              Welcome back
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary">
              Login to CourseHub
            </h1>

            <p className="mt-2 text-primary/70">
              Access and manage your published courses.
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
                Email address
              </span>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="input input-bordered w-full border-primary/35 bg-base-100 shadow-sm transition-colors focus:border-primary focus:outline-2 focus:outline-primary/20"
                required
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
                className="input input-bordered w-full border-primary/35 bg-base-100 shadow-sm transition-colors focus:border-primary focus:outline-2 focus:outline-primary/20"
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
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            {hasDemoAccount && (
              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => {
                  setEmail(demoEmail);
                  setPassword(demoPassword);
                  setError("");
                }}
              >
                Use Demo Account
              </button>
            )}
          </form>

          <p className="mt-6 text-center text-sm text-primary/70">
            Do not have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-neutral hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Login;
