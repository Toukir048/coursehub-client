import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import Container from "./Container";

interface NavigationItem {
  name: string;
  path: string;
}

const publicNavigationItems: NavigationItem[] = [
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

const privateNavigationItems: NavigationItem[] = [
  {
    name: "Add Course",
    path: "/items/add",
  },
  {
    name: "Manage Courses",
    path: "/items/manage",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navigationItems = user
    ? [...publicNavigationItems, ...privateNavigationItems]
    : publicNavigationItems;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  const getDesktopNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) => {
    return [
      "rounded-lg px-3 py-2 text-sm font-medium transition duration-200",
      isActive
        ? "bg-secondary text-secondary-content"
        : "text-primary-content/75 hover:bg-primary-content/10 hover:text-primary-content",
    ].join(" ");
  };

  const getMobileNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) => {
    return [
      "rounded-xl px-4 py-3 text-sm font-medium transition duration-200",
      isActive
        ? "bg-secondary text-secondary-content"
        : "text-primary-content/80 hover:bg-primary-content/10 hover:text-primary-content",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary-content/10 bg-primary shadow-sm">
      <Container>
        <nav className="flex min-h-18 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-xl font-bold text-secondary-content shadow-sm">
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

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 xl:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={getDesktopNavLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop authentication section */}
          <div className="hidden items-center gap-3 xl:flex">
            {user ? (
              <>
                <div className="flex items-center gap-3 rounded-xl bg-primary-content/10 px-3 py-2">
                  <div className="flex size-9 items-center justify-center rounded-full bg-accent font-bold text-accent-content">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="max-w-32">
                    <p className="truncate text-sm font-semibold text-primary-content">
                      {user.name}
                    </p>

                    <p className="truncate text-xs text-primary-content/55">
                      {user.email}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn border-0 bg-neutral text-neutral-content hover:bg-neutral/90"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((currentState) => !currentState)
            }
            className="btn btn-square border-primary-content/20 bg-transparent text-primary-content hover:bg-primary-content/10 xl:hidden"
          >
            {isMenuOpen ? (
              <span className="text-3xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">☰</span>
            )}
          </button>
        </nav>

        {/* Mobile and tablet menu */}
        {isMenuOpen && (
          <div className="border-t border-primary-content/10 py-4 xl:hidden">
            {user && (
              <div className="mb-4 flex items-center gap-3 rounded-2xl bg-primary-content/10 p-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-content">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate font-semibold text-primary-content">
                    {user.name}
                  </p>

                  <p className="truncate text-sm text-primary-content/60">
                    {user.email}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={getMobileNavLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 border-t border-primary-content/10 pt-4">
              {user ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn w-full border-0 bg-neutral text-neutral-content hover:bg-neutral/90"
                >
                  Logout
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
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
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;