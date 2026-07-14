import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import Courses from "../pages/courses/Courses";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);