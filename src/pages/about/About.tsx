import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const About = () => {
  const values = [
    {
      title: "Practical Learning",
      description:
        "We focus on courses that help learners build useful academic and professional skills.",
    },
    {
      title: "Simple Experience",
      description:
        "Course discovery, filtering, details, and management remain clear and beginner-friendly.",
    },
    {
      title: "Reliable Information",
      description:
        "Every course provides meaningful descriptions, pricing, duration, ratings, and learning outcomes.",
    },
  ];

  return (
    <main>
      <section className="bg-primary py-16 text-primary-content lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-content">
              About CourseHub
            </span>

            <h1 className="mt-6 text-4xl leading-tight font-bold md:text-5xl">
              A simple platform for discovering and managing practical courses
            </h1>

            <p className="mt-5 text-lg leading-8 text-primary-content/75">
              CourseHub helps learners explore useful courses while allowing
              registered users to publish and manage their own learning
              content.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="Our Mission"
            description="Our goal is to make practical learning opportunities easier to discover and understand."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-base-100 p-7 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent font-bold text-accent-content">
                  0{index + 1}
                </span>

                <h2 className="mt-5 text-xl font-bold text-primary">
                  {value.title}
                </h2>

                <p className="mt-3 flex-1 leading-7 text-primary/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Built for learners and course creators
              </h2>

              <p className="mt-5 leading-8 text-primary/75">
                Learners can search, filter, sort, review, and compare courses.
                Registered users can add courses, manage their content, and
                review dashboard statistics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">40+</p>
                <p className="mt-2 text-primary/65">Courses</p>
              </div>

              <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="mt-2 text-primary/65">Categories</p>
              </div>

              <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">1,200+</p>
                <p className="mt-2 text-primary/65">Learners</p>
              </div>

              <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">4.8</p>
                <p className="mt-2 text-primary/65">Average Rating</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default About;