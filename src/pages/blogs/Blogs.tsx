import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { blogPosts } from "../../data/home.data";

const Blogs = () => {
  return (
    <main className="py-16 lg:py-20">
      <Container>
        <SectionTitle
          title="Learning Resources"
          description="Read practical beginner-friendly guides about development, APIs, and databases."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-44 items-center justify-center bg-primary">
                <span className="text-5xl font-bold text-secondary">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-primary/55">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-primary">
                  {post.title}
                </h2>

                <p className="mt-3 flex-1 leading-7 text-primary/70">
                  {post.summary}
                </p>

                <button
                  type="button"
                  className="btn mt-6 border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content"
                >
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-secondary p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            More learning guides are being prepared
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-primary/70">
            Future articles will cover React, TypeScript, MongoDB, Express,
            authentication, and full-stack project development.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Blogs;