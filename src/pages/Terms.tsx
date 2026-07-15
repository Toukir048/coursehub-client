import Container from "../components/shared/Container";

const Terms = () => {
  return (
    <main className="py-16">
      <Container>
        <article className="mx-auto max-w-4xl rounded-2xl bg-base-100 p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-primary">
            Terms and Conditions
          </h1>

          <p className="mt-5 leading-7 text-primary/70">
            CourseHub users must provide accurate information and must not
            publish harmful, misleading, or unauthorized course content.
          </p>
        </article>
      </Container>
    </main>
  );
};

export default Terms;