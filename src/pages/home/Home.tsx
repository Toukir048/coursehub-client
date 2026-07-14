import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Home = () => {
  return (
    <main className="min-h-screen bg-base-200">
      <section className="flex min-h-screen items-center py-16">
        <Container>
          <div className="rounded-3xl bg-base-100 p-8 shadow-sm md:p-12">
            <SectionTitle
              title="Build Your Skills with CourseHub"
              description="Explore practical courses, learn from experienced instructors, and share your own knowledge with the community."
            />

            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-primary">
                Explore Courses
              </button>

              <button className="btn bg-neutral text-neutral-content hover:bg-neutral/90">
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;