import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import StatCard from "../../components/cards/StatCard";
import Container from "../../components/shared/Container";
import { EmptyState, ErrorState, LoadingState } from "../../components/shared/FeedbackState";
import PageHeader from "../../components/shared/PageHeader";
import { useAuth } from "../../hooks/useAuth";
import { getStatistics } from "../../services/dashboard.service";
import type { DashboardStatistics } from "../../types/dashboard";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const chartColors = ["#11365B", "#946741", "#C5C5B2"];

const Dashboard = () => {
  const { user } = useAuth(); const [data, setData] = useState<DashboardStatistics | null>(null); const [loading, setLoading] = useState(true); const [error, setError] = useState("");
  useEffect(() => { let active = true; getStatistics().then((response) => { if (active) setData(response.data); }).catch((requestError: unknown) => { if (active) setError(getApiErrorMessage(requestError, "Unable to load dashboard statistics.")); }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, []);
  if (loading) return <LoadingState label="Preparing your dashboard…" />;
  if (error || !data) return <main className="py-12"><Container><ErrorState title="Dashboard unavailable" description={error || "Statistics are not available right now."} /></Container></main>;
  const charts = [{ title: "Courses by category", description: "Your course mix across subjects.", items: data.categoryData.map((item) => ({ label: item.category, total: item.total })) }, { title: "Price distribution", description: "Courses grouped by price range.", items: data.priceData.map((item) => ({ label: item.range, total: item.total })) }, { title: "Rating distribution", description: "How course ratings are distributed.", items: data.ratingData.map((item) => ({ label: item.rating, total: item.total })) }];
  return <main className="py-10 sm:py-12 lg:py-16"><Container><PageHeader eyebrow="Overview" title={`Welcome back, ${user?.name.split(" ")[0] ?? "Creator"}`} description="Track your courses, reviews, pricing, and recent activity in one place." action={<Link to="/add-course" className="btn btn-primary">Add Course</Link>} />
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><StatCard label="Total courses" value={data.summary.totalCourses} description="Published courses" /><StatCard label="Total reviews" value={data.summary.totalReviews} description="Learner feedback received" /><StatCard label="Average price" value={`৳${data.summary.averagePrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}`} description="Across published courses" /></div>
    <section className="mt-8 grid gap-6 xl:grid-cols-3">{charts.map((chart, index) => <article key={chart.title} className="min-w-0 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6"><h2 className="text-lg font-semibold sm:text-xl">{chart.title}</h2><p className="mt-1 text-sm text-base-content/55">{chart.description}</p>{chart.items.length ? <div className="mt-5 h-64 w-full"><ResponsiveContainer width="100%" height="100%"><BarChart data={chart.items} margin={{ top: 8, right: 4, left: -24, bottom: 8 }}><CartesianGrid stroke="#C5C5B2" strokeOpacity={0.45} vertical={false} /><XAxis dataKey="label" tick={{ fill: "#11365B", fontSize: 11 }} tickLine={false} axisLine={false} interval={0} tickFormatter={(value: string) => value.length > 10 ? `${value.slice(0, 9)}…` : value} /><YAxis allowDecimals={false} tick={{ fill: "#11365B", fontSize: 11 }} tickLine={false} axisLine={false} /><Tooltip cursor={{ fill: "#E1D3B6", opacity: 0.35 }} contentStyle={{ border: "1px solid #C5C5B2", borderRadius: "12px", color: "#11365B" }} /><Bar dataKey="total" fill={chartColors[index]} radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></div> : <div className="mt-5"><EmptyState title="No chart data" compact /></div>}</article>)}</section>
    <section className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6"><div className="flex items-center justify-between gap-4"><div><h2 className="text-xl font-semibold sm:text-2xl">Recent courses</h2><p className="mt-1 text-sm text-base-content/55">Your latest published content.</p></div><Link to="/manage-courses" className="btn btn-ghost btn-sm">Manage all</Link></div>{data.recentCourses.length ? <div className="mt-5 divide-y divide-base-300">{data.recentCourses.map((course) => <Link key={course._id} to={`/courses/${course._id}`} className="flex flex-col gap-2 py-4 transition-colors hover:text-primary sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold">{course.title}</span><span className="text-sm text-base-content/60">{course.category} · ৳{course.price.toLocaleString()} · ★ {course.rating || "New"}</span></Link>)}</div> : <div className="mt-5"><EmptyState title="No recent courses" description="Published courses will appear here." compact /></div>}</section>
  </Container></main>;
};
export default Dashboard;
