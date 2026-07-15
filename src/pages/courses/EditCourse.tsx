import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CourseForm from "../../components/forms/CourseForm";
import Container from "../../components/shared/Container";
import { ErrorState, LoadingState } from "../../components/shared/FeedbackState";
import PageHeader from "../../components/shared/PageHeader";
import { getCourseById, updateCourse } from "../../services/course.service";
import type { Course, CreateCoursePayload } from "../../types/course.types";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const EditCourse = () => {
  const { courseId } = useParams(); const navigate = useNavigate(); const [course, setCourse] = useState<Course | null>(null); const [loading, setLoading] = useState(Boolean(courseId)); const [submitting, setSubmitting] = useState(false); const [error, setError] = useState("");
  useEffect(() => { if (!courseId) return; let active = true; getCourseById(courseId).then((response) => { if (active) setCourse(response.data.course); }).catch((requestError: unknown) => { if (active) setError(getApiErrorMessage(requestError, "Unable to load course.")); }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [courseId]);
  const submit = async (payload: CreateCoursePayload) => { if (!courseId) return; setSubmitting(true); setError(""); try { await updateCourse(courseId, payload); navigate("/manage-courses"); } catch (requestError) { setError(getApiErrorMessage(requestError, "Unable to update course.")); } finally { setSubmitting(false); } };
  if (loading) return <LoadingState label="Loading course…" />;
  return <main className="py-10 sm:py-12 lg:py-16"><Container className="max-w-5xl"><PageHeader eyebrow="Course creator" title="Edit course" description="Keep course details accurate and useful for prospective learners." /><div className="mt-8">{course ? <CourseForm course={course} submitLabel="Save Changes" submitting={submitting} error={error} onSubmit={submit} /> : <ErrorState title="Course unavailable" description={error || "The requested course could not be found."} />}</div></Container></main>;
};
export default EditCourse;
