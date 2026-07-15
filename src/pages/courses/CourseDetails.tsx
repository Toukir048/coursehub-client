import { Link, useParams } from "react-router";
import Container from "../../components/shared/Container";

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <main className="py-16">
      <Container>
        <div className="rounded-2xl bg-base-100 p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-primary">
            Course Details
          </h1>

          <p className="mt-4 text-primary/70">
            Selected course ID: {id}
          </p>

          <p className="mt-2 text-primary/70">
            Complete course information will be connected with the backend
            and MongoDB in the course listing commit.
          </p>

          <Link to="/courses" className="btn btn-primary mt-6">
            Back to Courses
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default CourseDetails;