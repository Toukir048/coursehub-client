import Container from "../../components/shared/Container";

const Home = () => {
  return (
    <main>
      <section className="flex min-h-[70vh] items-center bg-primary py-16 text-primary-content">
        <Container>
          <div className="max-w-3xl">
            <span className="badge border-secondary bg-secondary px-4 py-3 text-secondary-content">
              Practical learning platform
            </span>

            <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Develop valuable skills with practical online courses
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-primary-content/80 md:text-lg">
              CourseHub connects learners with useful courses in programming,
              design, business, and career development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn border-0 bg-neutral text-neutral-content">
                Explore Courses
              </a>

              <a className="btn border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-content">
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;