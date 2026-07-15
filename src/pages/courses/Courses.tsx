import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import CourseCard from "../../components/cards/CourseCard";
import CourseCardSkeleton from "../../components/loaders/CourseCardSkeleton";
import Container from "../../components/shared/Container";
import { EmptyState, ErrorState } from "../../components/shared/FeedbackState";
import PageHeader from "../../components/shared/PageHeader";
import { getCourses } from "../../services/course.service";
import type { Course, CoursePagination, CourseSortOption } from "../../types/course.types";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const categories = ["Web Development", "Backend Development", "Programming", "Database", "UI/UX Design"];
const emptyPagination: CoursePagination = { page: 1, limit: 8, totalItems: 0, totalPages: 0 };

const Courses = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(""); const [debouncedSearch, setDebouncedSearch] = useState(""); const [category, setCategory] = useState(() => searchParams.get("category") ?? ""); const [maxPrice, setMaxPrice] = useState(""); const [minimumRating, setMinimumRating] = useState(""); const [sort, setSort] = useState<CourseSortOption>("newest"); const [page, setPage] = useState(1); const [courses, setCourses] = useState<Course[]>([]); const [pagination, setPagination] = useState(emptyPagination); const [loading, setLoading] = useState(true); const [error, setError] = useState("");
  useEffect(() => { const timer = window.setTimeout(() => { setDebouncedSearch(search.trim()); setPage(1); }, 400); return () => window.clearTimeout(timer); }, [search]);
  useEffect(() => { let active = true; const load = async () => { setLoading(true); setError(""); try { const response = await getCourses({ search: debouncedSearch || undefined, category: category || undefined, maxPrice: maxPrice ? Number(maxPrice) : undefined, minimumRating: minimumRating ? Number(minimumRating) : undefined, sort, page, limit: 8 }); if (active) { const next = response.data.pagination; if (next.totalPages > 0 && page > next.totalPages) { setPage(next.totalPages); return; } setCourses(response.data.courses); setPagination(next); } } catch (requestError) { if (active) setError(getApiErrorMessage(requestError, "Unable to load courses.")); } finally { if (active) setLoading(false); } }; void load(); return () => { active = false; }; }, [debouncedSearch, category, maxPrice, minimumRating, sort, page]);
  const changeFilter = (setter: (value: string) => void, value: string) => { setter(value); setPage(1); };
  const reset = () => { setSearch(""); setDebouncedSearch(""); setCategory(""); setMaxPrice(""); setMinimumRating(""); setSort("newest"); setPage(1); };
  const pages = Array.from({ length: pagination.totalPages }, (_, index) => index + 1).filter((number) => pagination.totalPages <= 7 || number === 1 || number === pagination.totalPages || Math.abs(number - page) <= 1);

  return <main className="py-10 sm:py-12 lg:py-16"><Container><PageHeader eyebrow="Course catalog" title="Find your next course" description="Search and compare practical courses based on your goals, budget, and experience level." />
    <section className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm md:p-6"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      <label className="xl:col-span-2"><span className="mb-2 block text-sm font-medium">Search courses</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className="input input-bordered w-full" /></label>
      <label><span className="mb-2 block text-sm font-medium">Category</span><select value={category} onChange={(event) => changeFilter(setCategory, event.target.value)} className="select select-bordered w-full"><option value="">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label><span className="mb-2 block text-sm font-medium">Maximum price</span><select value={maxPrice} onChange={(event) => changeFilter(setMaxPrice, event.target.value)} className="select select-bordered w-full"><option value="">Any price</option><option value="1800">Up to ৳1,800</option><option value="2200">Up to ৳2,200</option><option value="3000">Up to ৳3,000</option></select></label>
      <label><span className="mb-2 block text-sm font-medium">Minimum rating</span><select value={minimumRating} onChange={(event) => changeFilter(setMinimumRating, event.target.value)} className="select select-bordered w-full"><option value="">Any rating</option><option value="4">4.0 and above</option><option value="4.5">4.5 and above</option></select></label>
    </div><div className="mt-5 flex flex-col justify-between gap-4 border-t border-base-300 pt-5 sm:flex-row sm:items-end"><label className="w-full sm:max-w-xs"><span className="mb-2 block text-sm font-medium">Sort by</span><select value={sort} onChange={(event) => { setSort(event.target.value as CourseSortOption); setPage(1); }} className="select select-bordered w-full"><option value="newest">Newest first</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Highest rated</option></select></label><button type="button" onClick={reset} className="btn btn-outline">Reset Filters</button></div></section>
    <div className="mt-7 flex flex-wrap justify-between gap-2 text-sm text-base-content/60"><p><span className="font-semibold text-base-content">{pagination.totalItems}</span> courses found</p>{pagination.totalPages > 0 && <p>Page {pagination.page} of {pagination.totalPages}</p>}</div>
    {error && <div className="mt-6"><ErrorState title="Courses could not be loaded" description={error} compact /></div>}
    {loading ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 8 }, (_, index) => <CourseCardSkeleton key={index} />)}</div> : courses.length ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{courses.map((course) => <CourseCard key={course._id} course={course} />)}</div> : !error && <div className="mt-8"><EmptyState title="No matching courses" description="Try a broader search or clear the active filters." action={<button type="button" onClick={reset} className="btn btn-primary">Clear Filters</button>} /></div>}
    {pagination.totalPages > 1 && <nav className="mt-10 flex justify-center" aria-label="Course pages"><div className="join max-w-full"><button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="join-item btn btn-sm sm:btn-md">Previous</button>{pages.map((number) => <button type="button" key={number} aria-label={`Page ${number}`} aria-current={page === number ? "page" : undefined} onClick={() => setPage(number)} className={`join-item btn btn-sm sm:btn-md ${page === number ? "btn-primary" : ""}`}>{number}</button>)}<button type="button" aria-label="Next page" disabled={page === pagination.totalPages} onClick={() => setPage((current) => current + 1)} className="join-item btn btn-sm sm:btn-md">Next</button></div></nav>}
  </Container></main>;
};
export default Courses;
