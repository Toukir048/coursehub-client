import { useState } from "react";
import { Link, NavLink } from "react-router";
import Container from "./Container";

interface NavigationItem {
  name: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return [
      "rounded-lg px-3 py-2 text-sm font-medium transition",
      isActive
        ? "bg-secondary text-secondary-content"
        : "text-primary-content/80 hover:bg-primary-content/10 hover:text-primary-content",
    ].join(" ");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary-content/10 bg-primary shadow-sm">
      <Container>
        <nav className="flex min-h-18 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-lg font-bold text-secondary-content">
              C
            </div>

            <div>
              <p className="text-xl font-bold text-primary-content">
                CourseHub
              </p>

              <p className="hidden text-xs text-primary-content/60 sm:block">
                Learn practical skills
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={getNavLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="btn border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-content"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn border-0 bg-neutral text-neutral-content hover:bg-neutral/90"
            >
              Register
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
            className="btn btn-square border-primary-content/20 bg-transparent text-primary-content hover:bg-primary-content/10 lg:hidden"
          >
            {isMenuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-primary-content/10 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={getNavLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-primary-content/10 pt-4">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="btn border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-content"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="btn border-0 bg-neutral text-neutral-content hover:bg-neutral/90"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;