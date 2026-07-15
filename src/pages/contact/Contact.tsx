import { useState, type FormEvent } from "react";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const subject = String(formData.get("subject")).trim();
    const userMessage = String(formData.get("message")).trim();

    if (name.length < 3) {
      setError("Name must contain at least 3 characters.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (subject.length < 5) {
      setError("Subject must contain at least 5 characters.");
      return;
    }

    if (userMessage.length < 10) {
      setError("Message must contain at least 10 characters.");
      return;
    }

    setMessage(
      "Your message has been received. The CourseHub team will contact you soon.",
    );

    form.reset();
  };

  return (
    <main className="py-16 lg:py-20">
      <Container>
        <SectionTitle
          title="Contact CourseHub"
          description="Send questions, suggestions, or support requests to the CourseHub team."
        />

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="rounded-2xl bg-primary p-7 text-primary-content shadow-sm">
            <h2 className="text-2xl font-bold">Contact Information</h2>

            <p className="mt-4 leading-7 text-primary-content/70">
              Our team is available to help with account, course, and platform
              questions.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-primary-content/55">Email</p>
                <a
                  href="mailto:anjumtanvir117@gmail.com"
                  className="mt-1 block font-semibold text-secondary hover:underline"
                >
                  anjumtanvir117@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-primary-content/55">Location</p>
                <p className="mt-1 font-semibold">Barishal, Bangladesh</p>
              </div>

              <div>
                <p className="text-sm text-primary-content/55">
                  Support Hours
                </p>
                <p className="mt-1 font-semibold">
                  Saturday–Thursday, 9:00 AM–6:00 PM
                </p>
              </div>
            </div>
          </aside>

          <section className="rounded-2xl border border-primary/10 bg-base-100 p-6 shadow-sm md:p-8">
            {error && (
              <div className="alert alert-error mb-6">
                <span>{error}</span>
              </div>
            )}

            {message && (
              <div className="alert alert-success mb-6">
                <span>{message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-semibold text-primary">
                    Full name
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-semibold text-primary">
                    Email address
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Subject
                </span>

                <input
                  type="text"
                  name="subject"
                  placeholder="What do you need help with?"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-primary">
                  Message
                </span>

                <textarea
                  name="message"
                  placeholder="Write your message"
                  className="textarea textarea-bordered min-h-40 w-full"
                  required
                />
              </label>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Contact;