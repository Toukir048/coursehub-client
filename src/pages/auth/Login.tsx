import { Link } from "react-router";
import Container from "../../components/shared/Container";

const Login = () => {
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
              Access your courses and manage your learning activity.
            </p>
          </div>

          <form className="mt-8 space-y-5">
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
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </label>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>

            <button
              type="button"
              className="btn border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content w-full"
            >
              Demo Login
            </button>
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