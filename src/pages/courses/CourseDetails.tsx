import { useCallback, useEffect, useState, type FormEvent } from "react";
import { Link, useParams } from "react-router";
import Container from "../../components/shared/Container";
import { useAuth } from "../../hooks/useAuth";
import { getCourseById } from "../../services/course.service";
import { createReview, getCourseReviews } from "../../services/review.service";
import type { Course } from "../../types/course.types";
import type { Review } from "../../types/review";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const load = useCallback(async () => {
    if (!courseId) return;
    setLoading(true); setError("");
    try {
      const [courseResponse, reviewResponse] = await Promise.all([getCourseById(courseId), getCourseReviews(courseId)]);
      setCourse(courseResponse.data.course); setReviews(reviewResponse.data.reviews);
    } catch (requestError) { setError(getApiErrorMessage(requestError, "Unable to load this course.")); }
    finally { setLoading(false); }
  }, [courseId]);
  useEffect(() => {
    if (!courseId) return;
    let active = true;
    Promise.all([getCourseById(courseId), getCourseReviews(courseId)])
      .then(([courseResponse, reviewResponse]) => {
        if (active) { setCourse(courseResponse.data.course); setReviews(reviewResponse.data.reviews); }
      })
      .catch((requestError: unknown) => { if (active) setError(getApiErrorMessage(requestError, "Unable to load this course.")); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [courseId]);

  const submitReview = async (event: FormEvent) => {
    event.preventDefault(); if (!courseId || !comment.trim()) return;
    setSubmitting(true); setReviewError("");
    try { await createReview({ courseId, rating, comment: comment.trim() }); setComment(""); setRating(5); await load(); }
    catch (requestError) { setReviewError(getApiErrorMessage(requestError, "Unable to add review.")); }
    finally { setSubmitting(false); }
  };

  if (loading) return <div className="flex min-h-[60vh] items-center justify-center"><span className="loading loading-spinner loading-lg text-primary" /></div>;
  if (error || !course) return <main className="py-16"><Container><div className="alert alert-error"><span>{error || "Course not found."}</span></div><Link to="/courses" className="btn btn-primary mt-6">Browse Courses</Link></Container></main>;

  return <main><section className="bg-primary py-14 text-primary-content"><Container><div className="grid items-center gap-10 lg:grid-cols-2"><div><span className="badge badge-secondary">{course.category}</span><h1 className="mt-5 text-4xl font-bold lg:text-5xl">{course.title}</h1><p className="mt-5 text-lg text-primary-content/75">{course.shortDescription}</p><div className="mt-7 flex flex-wrap gap-5"><span>★ {course.rating || "Not rated"}</span><span>{course.level}</span><span>{course.duration}</span></div><p className="mt-5">Instructor: <strong>{course.instructorName}</strong></p></div><img src={course.image || "https://placehold.co/800x450?text=CourseHub"} alt={course.title} className="h-80 w-full rounded-3xl object-cover" /></div></Container></section>
    <section className="py-16"><Container><div className="grid gap-8 lg:grid-cols-[1fr_320px]"><div className="space-y-8">
      <article className="rounded-2xl border border-primary/10 bg-base-100 p-8 shadow-sm"><h2 className="text-2xl font-bold">Course Overview</h2><p className="mt-4 leading-8 text-primary/75">{course.fullDescription}</p></article>
      {course.additionalImages.length > 0 && <article className="rounded-2xl border border-primary/10 bg-base-100 p-8"><h2 className="text-2xl font-bold">Course Gallery</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{course.additionalImages.map((image) => <img key={image} src={image} alt={course.title} className="h-56 w-full rounded-xl object-cover" />)}</div></article>}
      <div className="grid gap-8 md:grid-cols-2"><article className="rounded-2xl bg-base-100 p-6 shadow-sm"><h2 className="text-2xl font-bold">What You Will Learn</h2><ul className="mt-5 space-y-3">{course.learningOutcomes.map((item) => <li key={item}>✓ {item}</li>)}</ul></article><article className="rounded-2xl bg-base-100 p-6 shadow-sm"><h2 className="text-2xl font-bold">Requirements</h2><ul className="mt-5 space-y-3">{course.requirements.map((item) => <li key={item}>• {item}</li>)}</ul></article></div>
      <article className="rounded-2xl bg-base-100 p-8 shadow-sm"><h2 className="text-2xl font-bold">Reviews and Ratings</h2>{reviews.length ? <div className="mt-6 space-y-4">{reviews.map((review) => <div key={review._id} className="rounded-xl bg-base-200 p-5"><div className="flex items-center gap-3"><div className="avatar placeholder"><div className="size-10 rounded-full bg-primary text-primary-content">{review.userImage ? <img src={review.userImage} alt={review.userName} /> : <span>{review.userName.charAt(0)}</span>}</div></div><div><h3 className="font-bold">{review.userName}</h3><p className="text-sm opacity-60">{new Date(review.createdAt).toLocaleDateString()}</p></div><span className="ml-auto">★ {review.rating}</span></div><p className="mt-4">{review.comment}</p></div>)}</div> : <p className="mt-5">No reviews yet.</p>}
        {user ? <form onSubmit={submitReview} className="mt-8 space-y-4 border-t pt-6"><h3 className="text-xl font-bold">Write a review</h3>{reviewError && <div className="alert alert-error"><span>{reviewError}</span></div>}<select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="select select-bordered w-full">{[5,4,3,2,1].map((value) => <option key={value} value={value}>{value} stars</option>)}</select><textarea value={comment} onChange={(e) => setComment(e.target.value)} className="textarea textarea-bordered min-h-28 w-full" required placeholder="Share your experience" /><button disabled={submitting} className="btn btn-primary">{submitting && <span className="loading loading-spinner" />}Submit Review</button></form> : <p className="mt-8 border-t pt-6"><Link to="/login" state={{ from: `/courses/${courseId}` }} className="link link-primary">Login</Link> to write a review.</p>}
      </article>
    </div><aside className="h-fit rounded-2xl bg-base-100 p-6 shadow-sm lg:sticky lg:top-28"><p>Course price</p><p className="text-4xl font-bold text-neutral">৳{course.price}</p><div className="mt-6 space-y-4 border-y py-5"><p>Level: <strong>{course.level}</strong></p><p>Duration: <strong>{course.duration}</strong></p><p>Category: <strong>{course.category}</strong></p></div><Link to="/courses" className="btn btn-primary mt-6 w-full">Back to Courses</Link></aside></div></Container></section>
  </main>;
};
export default CourseDetails;
