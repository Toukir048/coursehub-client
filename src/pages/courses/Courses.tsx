import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Courses = () => {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title="Explore Our Courses"
          description="Browse practical courses designed to help you build useful academic and professional skills."
        />

        <div className="rounded-2xl border border-primary/10 bg-base-100 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-primary">
            Course collection is being prepared
          </h2>

          <p className="mt-3 text-primary/70">
            Courses will be loaded from the CourseHub server and MongoDB
            database.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Courses;