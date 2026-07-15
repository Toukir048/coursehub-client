import { useEffect, useMemo, useState } from "react";
import CourseCard from "../../components/cards/CourseCard";
import CourseCardSkeleton from "../../components/loaders/CourseCardSkeleton";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { courses } from "../../data/courses.data";

const ITEMS_PER_PAGE = 4;

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");
  const [minimumRating, setMinimumRating] = useState("all");
  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    ...new Set(courses.map((course) => course.category)),
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
    setCurrentPage(1);
  };

  const handleRatingChange = (value: string) => {
    setMinimumRating(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  const filteredCourses = useMemo(() => {
    const result = courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || course.category === category;

      const matchesPrice =
        maxPrice === "all" || course.price <= Number(maxPrice);

      const matchesRating =
        minimumRating === "all" ||
        course.rating >= Number(minimumRating);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating
      );
    });

    return [...result].sort((firstCourse, secondCourse) => {
      if (sort === "price-low") {
        return firstCourse.price - secondCourse.price;
      }

      if (sort === "price-high") {
        return secondCourse.price - firstCourse.price;
      }

      if (sort === "rating") {
        return secondCourse.rating - firstCourse.rating;
      }

      return (
        new Date(secondCourse.createdAt).getTime() -
        new Date(firstCourse.createdAt).getTime()
      );
    });
  }, [search, category, maxPrice, minimumRating, sort]);

  const totalPages = Math.ceil(
    filteredCourses.length / ITEMS_PER_PAGE,
  );

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1),
  );

  const paginatedCourses = filteredCourses.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setMaxPrice("all");
    setMinimumRating("all");
    setSort("newest");
    setCurrentPage(1);
  };

  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title="Explore Practical Courses"
          description="Search, filter, and compare courses based on your learning goals."
        />

        <section className="rounded-2xl border border-primary/10 bg-base-100 p-5 shadow-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <label className="xl:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-primary">
                Search course
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  handleSearchChange(event.target.value)
                }
                placeholder="Search by course title"
                className="input input-bordered w-full"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold text-primary">
                Category
              </span>

              <select
                value={category}
                onChange={(event) =>
                  handleCategoryChange(event.target.value)
                }
                className="select select-bordered w-full"
              >
                <option value="all">All categories</option>

                {categories.map((courseCategory) => (
                  <option
                    key={courseCategory}
                    value={courseCategory}
                  >
                    {courseCategory}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold text-primary">
                Maximum price
              </span>

              <select
                value={maxPrice}
                onChange={(event) =>
                  handleMaxPriceChange(event.target.value)
                }
                className="select select-bordered w-full"
              >
                <option value="all">Any price</option>
                <option value="1800">Up to ৳1,800</option>
                <option value="2200">Up to ৳2,200</option>
                <option value="2500">Up to ৳2,500</option>
                <option value="3000">Up to ৳3,000</option>
              </select>
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold text-primary">
                Minimum rating
              </span>

              <select
                value={minimumRating}
                onChange={(event) =>
                  handleRatingChange(event.target.value)
                }
                className="select select-bordered w-full"
              >
                <option value="all">Any rating</option>
                <option value="4">4.0 and above</option>
                <option value="4.5">4.5 and above</option>
                <option value="4.8">4.8 and above</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-4 border-t border-primary/10 pt-5 sm:flex-row sm:items-end">
            <label className="w-full sm:max-w-xs">
              <span className="mb-2 block text-sm font-semibold text-primary">
                Sort courses
              </span>

              <select
                value={sort}
                onChange={(event) =>
                  handleSortChange(event.target.value)
                }
                className="select select-bordered w-full"
              >
                <option value="newest">Newest first</option>
                <option value="price-low">
                  Price: low to high
                </option>
                <option value="price-high">
                  Price: high to low
                </option>
                <option value="rating">Highest rated</option>
              </select>
            </label>

            <button
              type="button"
              onClick={resetFilters}
              className="btn border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content"
            >
              Reset Filters
            </button>
          </div>
        </section>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="font-medium text-primary/70">
            {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""} found
          </p>

          {totalPages > 0 && (
            <p className="text-sm text-primary/60">
              Page {safeCurrentPage} of {totalPages}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        ) : paginatedCourses.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-primary/10 bg-base-100 p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-primary">
              No matching courses found
            </h2>

            <p className="mt-3 text-primary/70">
              Try changing your search text or filter options.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="btn btn-primary mt-6"
            >
              Clear Filters
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <div className="join">
              <button
                type="button"
                disabled={safeCurrentPage === 1}
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.max(page - 1, 1),
                  )
                }
                className="join-item btn"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }).map(
                (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() =>
                        setCurrentPage(pageNumber)
                      }
                      className={`join-item btn ${
                        safeCurrentPage === pageNumber
                          ? "btn-primary"
                          : ""
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                },
              )}

              <button
                type="button"
                disabled={safeCurrentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(page + 1, totalPages),
                  )
                }
                className="join-item btn"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Courses;