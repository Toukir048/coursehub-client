import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Blogs = () => {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title="Learning Resources"
          description="Read practical guides about programming, web development, databases, and career preparation."
        />

        <div className="rounded-2xl bg-base-100 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-primary">
            Helpful articles are coming soon
          </h2>

          <p className="mt-3 text-primary/70">
            The blog will include original learning resources for CourseHub
            users.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Blogs;