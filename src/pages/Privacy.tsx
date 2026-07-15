import Container from "../components/shared/Container";

const Privacy = () => {
  return (
    <main className="py-16">
      <Container>
        <article className="mx-auto max-w-4xl rounded-2xl bg-base-100 p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-primary">
            Privacy Policy
          </h1>

          <p className="mt-5 leading-7 text-primary/70">
            CourseHub stores account information required for authentication,
            course management, and user reviews. Passwords will be securely
            hashed before being stored in the database.
          </p>
        </article>
      </Container>
    </main>
  );
};

export default Privacy;