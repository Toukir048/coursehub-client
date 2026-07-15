import { useMemo } from "react";
import { Link } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Container from "../../components/shared/Container";
import { useAuth } from "../../hooks/useAuth";
import { courses } from "../../data/courses.data";

interface AddedCourse {
  _id: string;
  title: string;
  category: string;
  price: number;
  duration: string;
  image?: string;
  createdBy: string;
  createdAt: string;
}

const Dashboard = () => {
  const { user } = useAuth();

  const addedCourses = useMemo(() => {
    const savedCourses = JSON.parse(
      localStorage.getItem("coursehub-added-courses") ?? "[]",
    ) as AddedCourse[];

    return savedCourses.filter(
      (course) => course.createdBy === user?._id,
    );
  }, [user?._id]);

  const categoryChartData = useMemo(() => {
    const categoryCount = courses.reduce<Record<string, number>>(
      (result, course) => {
        result[course.category] =
          (result[course.category] ?? 0) + 1;

        return result;
      },
      {},
    );

    return Object.entries(categoryCount).map(
      ([category, totalCourses]) => ({
        category,
        totalCourses,
      }),
    );
  }, []);

  const priceChartData = useMemo(() => {
    const priceRanges = [
      {
        name: "Under ৳2,000",
        value: courses.filter((course) => course.price < 2000).length,
      },
      {
        name: "৳2,000–৳2,499",
        value: courses.filter(
          (course) => course.price >= 2000 && course.price < 2500,
        ).length,
      },
      {
        name: "৳2,500 and above",
        value: courses.filter((course) => course.price >= 2500)
          .length,
      },
    ];

    return priceRanges.filter((item) => item.value > 0);
  }, []);

  const totalCategories = new Set(
    courses.map((course) => course.category),
  ).size;

  const averageRating =
    courses.reduce((total, course) => total + course.rating, 0) /
    courses.length;

  const summaryCards = [
    {
      title: "Available Courses",
      value: courses.length,
      description: "Courses currently available",
    },
    {
      title: "My Courses",
      value: addedCourses.length,
      description: "Courses added by your account",
    },
    {
      title: "Categories",
      value: totalCategories,
      description: "Learning categories available",
    },
    {
      title: "Average Rating",
      value: averageRating.toFixed(1),
      description: "Average platform course rating",
    },
  ];

  return (
    <main className="py-16">
      <Container>
        <section className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="badge border-0 bg-accent text-accent-content">
              Protected dashboard
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
              Welcome, {user?.name}
            </h1>

            <p className="mt-3 max-w-2xl text-primary/70">
              Review CourseHub statistics and manage the courses
              published from your account.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/items/add"
              className="btn bg-neutral text-neutral-content hover:bg-neutral/90"
            >
              Add Course
            </Link>

            <Link
              to="/items/manage"
              className="btn btn-primary"
            >
              Manage Courses
            </Link>
          </div>
        </section>

        {/* Summary cards */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card, index) => (
            <article
              key={card.title}
              className="flex min-h-44 flex-col justify-between rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-primary/70">
                  {card.title}
                </p>

                <span className="flex size-10 items-center justify-center rounded-xl bg-accent font-bold text-accent-content">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-4xl font-bold text-primary">
                  {card.value}
                </p>

                <p className="mt-2 text-sm text-primary/60">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Charts */}
        <section className="mt-10 grid gap-6 xl:grid-cols-2">
          <article className="rounded-2xl border border-primary/10 bg-base-100 p-5 shadow-sm md:p-7">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Courses by Category
              </h2>

              <p className="mt-2 text-primary/60">
                Number of available courses in each learning category.
              </p>
            </div>

            <div className="mt-8 h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryChartData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -20,
                    bottom: 50,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="category"
                    angle={-25}
                    textAnchor="end"
                    interval={0}
                    height={80}
                    fontSize={12}
                  />

                  <YAxis allowDecimals={false} />

                  <Tooltip />

                  <Bar
                    dataKey="totalCourses"
                    name="Courses"
                    fill="#11365B"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-2xl border border-primary/10 bg-base-100 p-5 shadow-sm md:p-7">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Course Price Distribution
              </h2>

              <p className="mt-2 text-primary/60">
                Course availability grouped by price range.
              </p>
            </div>

            <div className="mt-8 h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={priceChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    outerRadius={95}
                    label
                  >
                    {priceChartData.map((item, index) => {
                      const chartColors = [
                        "#11365B",
                        "#946741",
                        "#C5C5B2",
                      ];

                      return (
                        <Cell
                          key={item.name}
                          fill={
                            chartColors[index % chartColors.length]
                          }
                        />
                      );
                    })}
                  </Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </article>
        </section>

        {/* Recent courses */}
        <section className="mt-10 rounded-2xl border border-primary/10 bg-base-100 p-5 shadow-sm md:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                My Recently Added Courses
              </h2>

              <p className="mt-2 text-primary/60">
                Recent courses published through your account.
              </p>
            </div>

            <Link
              to="/items/manage"
              className="font-semibold text-neutral hover:underline"
            >
              Manage all →
            </Link>
          </div>

          {addedCourses.length > 0 ? (
            <div className="mt-6 overflow-x-auto">
              <table className="table">
                <thead className="bg-primary text-primary-content">
                  <tr>
                    <th>Course</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Duration</th>
                  </tr>
                </thead>

                <tbody>
                  {addedCourses.slice(0, 5).map((course) => (
                    <tr key={course._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="size-12 rounded-lg bg-base-300">
                              {course.image ? (
                                <img
                                  src={course.image}
                                  alt={course.title}
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center font-bold text-primary">
                                  {course.title
                                    .charAt(0)
                                    .toUpperCase()}
                                </div>
                              )}
                            </div>
                          </div>

                          <span className="font-semibold text-primary">
                            {course.title}
                          </span>
                        </div>
                      </td>

                      <td>{course.category}</td>
                      <td>৳{course.price}</td>
                      <td>{course.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-base-200 p-8 text-center">
              <h3 className="text-xl font-bold text-primary">
                No course added yet
              </h3>

              <p className="mt-2 text-primary/70">
                Add a course to display your publishing statistics
                here.
              </p>

              <Link
                to="/items/add"
                className="btn btn-primary mt-5"
              >
                Add First Course
              </Link>
            </div>
          )}
        </section>
      </Container>
    </main>
  );
};

export default Dashboard;