import { useEffect, useState } from "react";
import CourseCard from "../../components/cards/CourseCard";
import CourseCardSkeleton from "../../components/loaders/CourseCardSkeleton";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { getCourses } from "../../services/course.service";
import type { Course, CoursePagination, CourseSortOption } from "../../types/course.types";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const categories = ["Web Development", "Backend Development", "Programming", "Database", "UI/UX Design"];
const emptyPagination: CoursePagination = { page: 1, limit: 8, totalItems: 0, totalPages: 0 };

const Courses = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minimumRating, setMinimumRating] = useState("");
  const [sort, setSort] = useState<CourseSortOption>("newest");
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>([]);
  const [pagination, setPagination] = useState(emptyPagination);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { const timer = window.setTimeout(() => { setDebouncedSearch(search.trim()); setPage(1); }, 400); return () => window.clearTimeout(timer); }, [search]);
  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true); setError("");
      try {
        const response = await getCourses({ search: debouncedSearch || undefined, category: category || undefined, maxPrice: maxPrice ? Number(maxPrice) : undefined, minimumRating: minimumRating ? Number(minimumRating) : undefined, sort, page, limit: 8 });
        if (active) {
          const nextPagination = response.data.pagination;
          if (nextPagination.totalPages > 0 && page > nextPagination.totalPages) {
            setPage(nextPagination.totalPages);
            return;
          }
          setCourses(response.data.courses);
          setPagination(nextPagination);
        }
      } catch (requestError) { if (active) setError(getApiErrorMessage(requestError, "Unable to load courses.")); }
      finally { if (active) setLoading(false); }
    };
    void load(); return () => { active = false; };
  }, [debouncedSearch, category, maxPrice, minimumRating, sort, page]);

  const changeFilter = (setter: (value: string) => void, value: string) => { setter(value); setPage(1); };
  const reset = () => { setSearch(""); setDebouncedSearch(""); setCategory(""); setMaxPrice(""); setMinimumRating(""); setSort("newest"); setPage(1); };

  return <main className="py-16"><Container><SectionTitle title="Explore Practical Courses" description="Search, filter, and compare courses based on your learning goals." />
    <section className="rounded-2xl border border-primary/10 bg-base-100 p-5 shadow-sm md:p-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <label className="xl:col-span-2"><span className="mb-2 block text-sm font-semibold text-primary">Search course</span><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className="input input-bordered w-full" placeholder="Search by course title" /></label>
        <label><span className="mb-2 block text-sm font-semibold text-primary">Category</span><select value={category} onChange={(e) => changeFilter(setCategory, e.target.value)} className="select select-bordered w-full"><option value="">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span className="mb-2 block text-sm font-semibold text-primary">Maximum price</span><select value={maxPrice} onChange={(e) => changeFilter(setMaxPrice, e.target.value)} className="select select-bordered w-full"><option value="">Any price</option><option value="1800">Up to ৳1,800</option><option value="2200">Up to ৳2,200</option><option value="3000">Up to ৳3,000</option></select></label>
        <label><span className="mb-2 block text-sm font-semibold text-primary">Minimum rating</span><select value={minimumRating} onChange={(e) => changeFilter(setMinimumRating, e.target.value)} className="select select-bordered w-full"><option value="">Any rating</option><option value="4">4.0 and above</option><option value="4.5">4.5 and above</option></select></label>
      </div>
      <div className="mt-5 flex flex-col justify-between gap-4 border-t border-primary/10 pt-5 sm:flex-row sm:items-end"><label className="w-full sm:max-w-xs"><span className="mb-2 block text-sm font-semibold text-primary">Sort courses</span><select value={sort} onChange={(e) => { setSort(e.target.value as CourseSortOption); setPage(1); }} className="select select-bordered w-full"><option value="newest">Newest first</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Highest rated</option></select></label><button onClick={reset} className="btn border-neutral bg-transparent text-neutral">Reset Filters</button></div>
    </section>
    <div className="mt-8 flex justify-between"><p className="font-medium text-primary/70">{pagination.totalItems} courses found</p>{pagination.totalPages > 0 && <p>Page {pagination.page} of {pagination.totalPages}</p>}</div>
    {error && <div className="alert alert-error mt-6"><span>{error}</span></div>}
    {loading ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{Array.from({length: 4}, (_, i) => <CourseCardSkeleton key={i} />)}</div> : courses.length ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{courses.map((course) => <CourseCard key={course._id} course={course} />)}</div> : !error && <div className="mt-8 rounded-2xl bg-base-100 p-10 text-center shadow-sm"><h2 className="text-2xl font-bold">No matching courses found</h2><button onClick={reset} className="btn btn-primary mt-6">Clear Filters</button></div>}
    {pagination.totalPages > 1 && <div className="mt-10 flex justify-center"><div className="join"><button disabled={page === 1} onClick={() => setPage(page - 1)} className="join-item btn">Previous</button>{Array.from({length: pagination.totalPages}, (_, i) => i + 1).map((number) => <button key={number} onClick={() => setPage(number)} className={`join-item btn ${page === number ? "btn-primary" : ""}`}>{number}</button>)}<button disabled={page === pagination.totalPages} onClick={() => setPage(page + 1)} className="join-item btn">Next</button></div></div>}
  </Container></main>;
};
export default Courses;
