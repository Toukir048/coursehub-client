import { useEffect, useState } from "react";
import { Link } from "react-router";
import CourseCard from "../../components/cards/CourseCard";
import CourseCardSkeleton from "../../components/loaders/CourseCardSkeleton";
import Container from "../../components/shared/Container";
import { EmptyState } from "../../components/shared/FeedbackState";
import SectionTitle from "../../components/shared/SectionTitle";
import { categories, faqItems } from "../../data/home.data";
import { useAuth } from "../../hooks/useAuth";
import { getCourses } from "../../services/course.service";
import type { Course } from "../../types/course.types";

const benefits = [
  { title: "Practical course information", description: "Compare outcomes, requirements, duration, pricing, and learner feedback before deciding." },
  { title: "Focused discovery", description: "Search, filter, sort, and paginate through courses without a complicated workflow." },
  { title: "A voice for learners", description: "Authenticated learners can share reviews that help others make informed choices." },
];

const learningSteps = [
  { title: "Discover", description: "Search the live catalog and narrow results by category, price, rating, or sort order." },
  { title: "Compare", description: "Review outcomes, requirements, duration, instructor information, and learner ratings." },
  { title: "Contribute", description: "Sign in to publish courses, manage your work, and leave useful reviews." },
];

const Home = () => {
  const { user } = useAuth();
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getCourses({ sort: "rating", limit: 4 })
      .then((response) => { if (active) setFeaturedCourses(response.data.courses.slice(0, 4)); })
      .catch(() => { if (active) setFeaturedCourses([]); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return <main>
    <section className="flex min-h-[65vh] items-center overflow-hidden bg-primary py-14 text-primary-content sm:py-16 lg:py-20"><Container><div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Learn with clarity</p><h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Build useful skills with courses you can trust</h1><p className="mt-5 max-w-xl text-base leading-relaxed text-primary-content/75 sm:text-lg">Discover practical courses, compare the details that matter, and learn from a community of students and course creators.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/courses" className="btn bg-secondary text-secondary-content hover:bg-secondary/90">Explore Courses</Link><Link to={user ? "/add-course" : "/about"} className="btn border-primary-content/35 bg-transparent text-primary-content hover:bg-primary-content/10">{user ? "Add a Course" : "Learn More"}</Link></div></div><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Students collaborating around a laptop" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.01]" /></div></Container></section>
    <section className="border-b border-base-300 bg-base-100 py-6"><Container><div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">{["Practical topics", "Flexible levels", "Creator tools", "Learner reviews"].map((label) => <p key={label} className="text-sm font-semibold text-base-content/65">{label}</p>)}</div></Container></section>
    <section className="py-10 sm:py-12 lg:py-16"><Container><SectionTitle eyebrow="Featured" title="Courses learners value" description="Explore highly rated courses pulled directly from the CourseHub catalog." align="left" />{loading ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <CourseCardSkeleton key={index} />)}</div> : featuredCourses.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featuredCourses.map((course) => <CourseCard key={course._id} course={course} />)}</div> : <EmptyState title="No featured courses yet" description="New courses will appear here as the catalog grows." compact />}<div className="mt-8"><Link to="/courses" className="btn btn-outline">View All Courses</Link></div></Container></section>
    <section className="bg-base-100 py-10 sm:py-12 lg:py-16"><Container><SectionTitle eyebrow="Browse by subject" title="Popular learning categories" description="Start with a subject area and discover courses that fit your goals." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category, index) => <Link key={category.title} to={`/courses?category=${encodeURIComponent(category.title)}`} className="group rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex size-11 items-center justify-center rounded-xl bg-secondary font-bold text-secondary-content">0{index + 1}</div><h3 className="mt-5 text-lg font-semibold sm:text-xl">{category.title}</h3><p className="mt-2 text-sm leading-relaxed text-base-content/60">{category.description}</p><span className="mt-5 inline-block text-sm font-semibold text-primary">Explore category →</span></Link>)}</div></Container></section>
    <section className="py-10 sm:py-12 lg:py-16"><Container><SectionTitle eyebrow="Why CourseHub" title="A better way to choose what to learn" description="Useful information, straightforward tools, and a consistent experience at every step." /><div className="grid gap-6 md:grid-cols-3">{benefits.map((benefit, index) => <article key={benefit.title} className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm"><span className="text-sm font-bold text-neutral">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3><p className="mt-3 text-sm leading-relaxed text-base-content/65">{benefit.description}</p></article>)}</div></Container></section>
    <section className="bg-base-100 py-10 sm:py-12 lg:py-16"><Container><SectionTitle eyebrow="How it works" title="A clear path from discovery to feedback" description="CourseHub keeps each stage focused so learners and creators know what comes next." /><ol className="grid gap-6 md:grid-cols-3">{learningSteps.map((step, index) => <li key={step.title} className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm"><span className="flex size-10 items-center justify-center rounded-full bg-secondary font-bold text-secondary-content">{index + 1}</span><h3 className="mt-5 text-lg font-semibold sm:text-xl">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-base-content/65">{step.description}</p></li>)}</ol></Container></section>
    <section className="bg-secondary py-10 sm:py-12 lg:py-16"><Container><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral">Share what you know</p><h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Create a course for the CourseHub community</h2><p className="mt-3 max-w-2xl text-base-content/65">Registered users can publish course information, manage updates, and follow performance from one dashboard.</p></div><Link to={user ? "/add-course" : "/register"} className="btn btn-primary">{user ? "Create a Course" : "Create an Account"}</Link></div></Container></section>
    <section className="py-10 sm:py-12 lg:py-16"><Container><SectionTitle eyebrow="Common questions" title="CourseHub FAQ" description="Quick answers about browsing, publishing, and reviewing courses." /><div className="mx-auto max-w-3xl space-y-3">{faqItems.map((item, index) => <div key={item.question} className="collapse-arrow collapse rounded-2xl border border-base-300 bg-base-100 shadow-sm"><input type="radio" name="home-faq" defaultChecked={index === 0} /><div className="collapse-title text-lg font-semibold">{item.question}</div><div className="collapse-content text-sm leading-relaxed text-base-content/65"><p>{item.answer}</p></div></div>)}</div></Container></section>
    <section className="bg-primary py-12 text-primary-content sm:py-16"><Container><div className="mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to find your next learning opportunity?</h2><p className="mx-auto mt-4 max-w-2xl text-primary-content/70">Browse the full catalog and compare courses at your own pace.</p><Link to="/courses" className="btn mt-7 bg-secondary text-secondary-content hover:bg-secondary/90">Explore Courses</Link></div></Container></section>
  </main>;
};

export default Home;
