import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/about/About";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import Courses from "../pages/courses/Courses";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import CourseDetails from "../pages/courses/CourseDetails";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import AddCourse from "../pages/courses/AddCourse";
import ManageCourses from "../pages/courses/ManageCourses";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import EditCourse from "../pages/courses/EditCourse";

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
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "courses/:courseId",
        Component: CourseDetails,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "terms",
        Component: Terms,
      },
      {
        path: "items/add",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "add-course",
        element: <PrivateRoute><AddCourse /></PrivateRoute>,
      },
      {
        path: "items/manage",
        element: (
          <PrivateRoute>
            <ManageCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-courses",
        element: <PrivateRoute><ManageCourses /></PrivateRoute>,
      },
      {
        path: "courses/:courseId/edit",
        element: <PrivateRoute><EditCourse /></PrivateRoute>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
