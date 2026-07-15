import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Container from "../../components/shared/Container";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { login, demoLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const destination =
    (location.state as { from?: string } | null)?.from ?? "/";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const success = login({ email, password });

    if (!success) {
      setError("Email or password is incorrect.");
      return;
    }

    navigate(destination, { replace: true });
  };

  const handleDemoLogin = () => {
    setEmail("user@coursehub.com");
    setPassword("User123");
    demoLogin();
    navigate(destination, { replace: true });
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                minLength={6}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="btn w-full border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content"
            >
              Demo Login
            </button>
          </form>

          <div className="mt-5 rounded-xl bg-base-200 p-4 text-sm">
            <p>
              <strong>Email:</strong> user@coursehub.com
            </p>
            <p className="mt-1">
              <strong>Password:</strong> User123
            </p>
          </div>

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