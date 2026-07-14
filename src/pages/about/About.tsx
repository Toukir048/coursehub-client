import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const About = () => {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title="About CourseHub"
          description="CourseHub is a learning platform created to make practical education easier to discover, manage, and share."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-primary p-8 text-primary-content shadow-sm">
            <h2 className="text-2xl font-bold">Our Mission</h2>

            <p className="mt-4 leading-7 text-primary-content/80">
              Our mission is to help learners develop useful skills through
              clear course information and accessible learning opportunities.
            </p>
          </article>

          <article className="rounded-2xl bg-base-300 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary">Our Approach</h2>

            <p className="mt-4 leading-7 text-primary/75">
              We focus on simple course discovery, reliable information, and
              an easy experience for learners and course creators.
            </p>
          </article>
        </div>
      </Container>
    </main>
  );
};

export default About;