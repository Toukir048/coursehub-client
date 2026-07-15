import Container from "../components/shared/Container";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "CourseHub collects account information such as name and email. Course information and reviews submitted by users are also stored.",
    },
    {
      title: "How Information Is Used",
      content:
        "Account data is used for authentication, authorization, course management, and displaying user-created content.",
    },
    {
      title: "Password Security",
      content:
        "Passwords are hashed before database storage. CourseHub does not store readable passwords.",
    },
    {
      title: "Authentication Tokens",
      content:
        "JWT access tokens are used to verify authenticated API requests and protect private routes.",
    },
    {
      title: "Contact",
      content:
        "Privacy questions can be sent to coursehub.platform@gmail.com.",
    },
  ];

  return (
    <main className="py-16 lg:py-20">
      <Container>
        <article className="mx-auto max-w-4xl rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-10">
          <span className="badge bg-accent text-accent-content">
            Legal Information
          </span>

          <h1 className="mt-5 text-3xl font-bold text-primary md:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-primary/60">
            Last updated: July 2026
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-primary">
                  {section.title}
                </h2>

                <p className="mt-3 leading-8 text-primary/70">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </main>
  );
};

export default Privacy;