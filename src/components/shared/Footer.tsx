import { Link } from "react-router";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-content">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-xl font-bold text-secondary-content">
                C
              </div>

              <span className="text-2xl font-bold">CourseHub</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-primary-content/70">
              A practical course discovery and management platform for
              students, learners, and course creators.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Explore</h3>

            <div className="mt-5 flex flex-col gap-3 text-primary-content/70">
              <Link to="/courses" className="hover:text-secondary">
                All Courses
              </Link>

              <Link to="/blogs" className="hover:text-secondary">
                Learning Blogs
              </Link>

              <Link to="/about" className="hover:text-secondary">
                About CourseHub
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Support</h3>

            <div className="mt-5 flex flex-col gap-3 text-primary-content/70">
              <Link to="/contact" className="hover:text-secondary">
                Contact
              </Link>

              <Link to="/privacy" className="hover:text-secondary">
                Privacy Policy
              </Link>

              <Link to="/terms" className="hover:text-secondary">
                Terms and Conditions
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>

            <div className="mt-5 space-y-3 text-primary-content/70">
              <p>Barishal, Bangladesh</p>

              <a
                href="mailto:anjumtanvir117@gmail.com"
                className="block hover:text-secondary"
              >
                anjumtanvir117@gmail.com
              </a>

              <a
                href="https://github.com/Toukir048"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-secondary"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-content/10 py-6 text-center text-sm text-primary-content/60">
          © {currentYear} CourseHub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
