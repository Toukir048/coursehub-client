function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-sm">
        <div className="card-body items-center text-center">
          <div className="badge badge-primary badge-outline">
            Learn and Grow
          </div>

          <h1 className="card-title text-4xl font-bold text-primary">
            CourseHub
          </h1>

          <p className="text-base-content/70">
            Explore useful courses, improve your skills, and share your
            knowledge with others.
          </p>

          <div className="card-actions mt-4">
            <button className="btn btn-primary">Explore Courses</button>

            <button className="btn btn-outline btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;