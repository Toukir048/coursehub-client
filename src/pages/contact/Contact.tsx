import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Contact = () => {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title="Contact CourseHub"
          description="Send your questions, suggestions, or support requests to the CourseHub team."
        />

        <div className="mx-auto max-w-2xl rounded-2xl bg-base-100 p-6 shadow-sm md:p-8">
          <form className="space-y-5">
            <label className="form-control">
              <span className="mb-2 font-semibold text-primary">Name</span>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your full name"
              />
            </label>

            <label className="form-control">
              <span className="mb-2 font-semibold text-primary">Email</span>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email address"
              />
            </label>

            <label className="form-control">
              <span className="mb-2 font-semibold text-primary">Message</span>
              <textarea
                className="textarea textarea-bordered min-h-32 w-full"
                placeholder="Write your message"
              />
            </label>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default Contact;