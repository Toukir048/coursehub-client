import type { FormEvent } from "react";
import { Link } from "react-router";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { courses } from "../../data/courses.data";
import {
  blogPosts,
  categories,
  faqItems,
  testimonials,
} from "../../data/home.data";

const Home = () => {
  const featuredCourses = courses.slice(0, 4);

  const handleNewsletterSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    alert(`Newsletter subscription requested for ${email}`);
    form.reset();
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-content lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-content">
                Learn practical and valuable skills
              </span>

              <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                Build your future through practical online learning
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-primary-content/75">
                Discover programming, web development, design, and database
                courses created to support your academic and professional
                growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/courses"
                  className="btn border-0 bg-neutral px-7 text-neutral-content hover:bg-neutral/90"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/register"
                  className="btn border-secondary bg-transparent px-7 text-secondary hover:bg-secondary hover:text-secondary-content"
                >
                  Join CourseHub
                </Link>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-secondary">40+</p>
                  <p className="text-sm text-primary-content/60">
                    Courses
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-secondary">
                    1,200+
                  </p>
                  <p className="text-sm text-primary-content/60">
                    Learners
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-secondary">4.8</p>
                  <p className="text-sm text-primary-content/60">
                    Average rating
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary p-4 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Students learning together"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[380px] lg:h-[420px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Explore Learning Categories"
            description="Choose a learning area based on your academic goals and professional interests."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-xl font-bold text-accent-content">
                  {category.title.charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-bold text-primary">
                  {category.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-primary/70">
                  {category.description}
                </p>

                <p className="mt-5 font-semibold text-neutral">
                  {category.courseCount} courses
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-base-100 py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Featured Courses"
            description="Explore popular courses designed around practical and career-focused skills."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredCourses.map((course) => (
              <article
                key={course._id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-content">
                      {course.category}
                    </span>

                    <span className="text-sm font-medium text-primary/70">
                      ★ {course.rating}
                    </span>
                  </div>

                  <h3 className="mt-4 line-clamp-2 text-xl font-bold text-primary">
                    {course.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 flex-1 leading-6 text-primary/70">
                    {course.shortDescription}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-primary/10 pt-4 text-sm">
                    <div>
                      <p className="text-primary/50">Price</p>
                      <p className="font-bold text-neutral">
                        ৳{course.price}
                      </p>
                    </div>

                    <div>
                      <p className="text-primary/50">Duration</p>
                      <p className="font-semibold text-primary">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/courses/${course._id}`}
                    className="btn btn-primary mt-5 w-full"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/courses"
              className="btn bg-neutral text-neutral-content hover:bg-neutral/90"
            >
              View All Courses
            </Link>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Why Choose CourseHub"
            description="A simple learning experience focused on useful information and practical growth."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Practical Learning",
                description:
                  "Courses focus on skills that can be applied in academic projects and real-world applications.",
              },
              {
                title: "Easy Course Discovery",
                description:
                  "Search, filter, sort, and compare courses without navigating complicated pages.",
              },
              {
                title: "Learner Community",
                description:
                  "Read reviews, share feedback, and learn from the experience of other students.",
              },
            ].map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl bg-primary p-7 text-primary-content shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary font-bold text-secondary-content">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-primary-content/70">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="bg-secondary py-16">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "40+",
                label: "Published Courses",
              },
              {
                value: "1,200+",
                label: "Registered Learners",
              },
              {
                value: "15+",
                label: "Course Categories",
              },
              {
                value: "4.8/5",
                label: "Average Rating",
              },
            ].map((statistic) => (
              <div key={statistic.label}>
                <p className="text-4xl font-bold text-primary">
                  {statistic.value}
                </p>

                <p className="mt-2 text-primary/70">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="How CourseHub Works"
            description="Find and manage useful courses through a simple learning process."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Explore Courses",
                description:
                  "Browse available courses and use filters to find the right learning option.",
              },
              {
                number: "02",
                title: "View Details",
                description:
                  "Read the overview, requirements, ratings, and related information before choosing.",
              },
              {
                number: "03",
                title: "Create and Manage",
                description:
                  "Registered users can add their own courses and manage their published content.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-primary/10 bg-base-100 p-7 shadow-sm"
              >
                <span className="text-4xl font-bold text-neutral">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-primary">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-primary/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-base-100 py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Learner Experiences"
            description="See how practical learning supports students and beginner developers."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-base-100 p-7 shadow-sm"
              >
                <div className="text-3xl text-neutral">“</div>

                <p className="mt-3 flex-1 leading-7 text-primary/75">
                  {testimonial.message}
                </p>

                <div className="mt-6 border-t border-primary/10 pt-5">
                  <h3 className="font-bold text-primary">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-neutral">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Blogs Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Latest Learning Articles"
            description="Read beginner-friendly guides about web development, APIs, and databases."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-base-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-primary/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-primary">
                  {post.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-primary/70">
                  {post.summary}
                </p>

                <Link
                  to="/blogs"
                  className="mt-5 font-semibold text-neutral hover:underline"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-base-100 py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Frequently Asked Questions"
            description="Find answers to common questions about CourseHub."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="collapse-arrow collapse border border-primary/10 bg-base-100 shadow-sm"
              >
                <input
                  type="radio"
                  name="coursehub-faq"
                  defaultChecked={index === 0}
                />

                <div className="collapse-title font-semibold text-primary">
                  {item.question}
                </div>

                <div className="collapse-content leading-7 text-primary/70">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="bg-accent py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Receive Useful Learning Updates
            </h2>

            <p className="mt-4 leading-7 text-primary/70">
              Subscribe to receive new course announcements and practical
              learning articles.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="input input-bordered w-full bg-base-100"
              />

              <button
                type="submit"
                className="btn btn-primary sm:px-8"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-16 text-primary-content">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to start building valuable skills?
              </h2>

              <p className="mt-3 max-w-2xl text-primary-content/70">
                Create an account to explore courses and manage your own
                learning content.
              </p>
            </div>

            <Link
              to="/register"
              className="btn border-0 bg-secondary px-8 text-secondary-content hover:bg-secondary/90"
            >
              Create Free Account
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;