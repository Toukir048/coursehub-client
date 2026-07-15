import Container from "../components/shared/Container";

const Terms = () => {
  const sections = [
    {
      title: "Account Responsibilities",
      content:
        "Users must provide accurate account information and keep their login credentials secure.",
    },
    {
      title: "Course Content",
      content:
        "Users must not publish harmful, copied, misleading, or unauthorized course information.",
    },
    {
      title: "Course Management",
      content:
        "Users may view and delete courses created from their own accounts. Administrators may manage content that violates platform rules.",
    },
    {
      title: "Acceptable Use",
      content:
        "CourseHub must not be used for spam, fraudulent activity, security attacks, or unlawful content.",
    },
    {
      title: "Changes to Terms",
      content:
        "CourseHub may update these terms when platform features or legal requirements change.",
    },
  ];

  return (
    <main className="py-16 lg:py-20">
      <Container>
        <article className="mx-auto max-w-4xl rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-10">
          <span className="badge bg-accent text-accent-content">
            Platform Rules
          </span>

          <h1 className="mt-5 text-3xl font-bold text-primary md:text-4xl">
            Terms and Conditions
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

export default Terms;