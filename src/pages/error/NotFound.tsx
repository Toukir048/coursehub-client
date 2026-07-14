import { Link } from "react-router";
import Container from "../../components/shared/Container";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center bg-primary py-16 text-primary-content">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-7xl font-bold text-secondary">404</p>

          <h1 className="mt-4 text-4xl font-bold">Page not found</h1>

          <p className="mt-4 leading-7 text-primary-content/75">
            The page you requested does not exist or may have been moved.
          </p>

          <Link
            to="/"
            className="btn mt-8 border-0 bg-neutral text-neutral-content"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;