import { Link } from "react-router";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import {
  blogPosts,
  categories,
  faqItems,
  featuredCourses,
  testimonials,
} from "../../data/home.data";

const Home = () => {
  const handleNewsletterSubmit = (
    event: React.FormEvent<HTMLFormElement>,
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
      {/* Hero */}
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
                Discover programming, development, design, and database
                courses created to support academic and professional growth.
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
                  <p className="text-sm text-primary-content/60">Courses</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-secondary">1,200+</p>
                  <p className="text-sm text-primary-content/60">Learners</p>
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
                className="h-[420px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
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
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

      {/* Featured Courses */}
      <section className="bg-base-100 py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Featured Courses"
            description="Explore popular courses designed around practical and career-focused skills."
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredCourses.map((course) => (
              <article
                key={course.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-content">
                    {course.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {course.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 flex-1 leading-6 text-primary/70">
                    {course.shortDescription}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-neutral">
                      ৳{course.price}
                    </span>

                    <span className="text-primary/70">
                      ★ {course.rating}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-primary/60">
                    Duration: {course.duration}
                  </div>

                  <Link
                    to={`/courses/${course.id}`}
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

      {/* Benefits */}
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
                  "Courses focus on skills that can be applied in academic projects and real applications.",
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

                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>

                <p className="mt-3 leading-7 text-primary-content/70">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="bg-secondary py-16">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["40+", "Published Courses"],
              ["1,200+", "Registered Learners"],
              ["15+", "Course Categories"],
              ["4.8/5", "Average Rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl font-bold text-primary">{value}</p>
                <p className="mt-2 text-primary/70">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20">
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
                <p className="flex-1 leading-7 text-primary/75">
                  “{testimonial.message}”
                </p>

                <div className="mt-6 border-t border-primary/10 pt-5">
                  <h3 className="font-bold text-primary">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-neutral">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Blogs */}
      <section className="bg-base-100 py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Latest Learning Articles"
            description="Read beginner-friendly guides about web development, APIs, and databases."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-base-100 p-7 shadow-sm"
              >
                <div className="flex items-center justify-between text-sm text-primary/60">
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

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Frequently Asked Questions"
            description="Find answers to common questions about CourseHub."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="collapse-arrow collapse border border-primary/10 bg-base-100"
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

      {/* Newsletter */}
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

              <button type="submit" className="btn btn-primary sm:px-8">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* CTA */}
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