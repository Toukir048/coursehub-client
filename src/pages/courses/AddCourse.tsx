import { useState } from "react";
import { useNavigate } from "react-router";
import CourseForm from "../../components/forms/CourseForm";
import Container from "../../components/shared/Container";
import PageHeader from "../../components/shared/PageHeader";
import { createCourse } from "../../services/course.service";
import type { CreateCoursePayload } from "../../types/course.types";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const AddCourse = () => {
  const navigate = useNavigate(); const [submitting, setSubmitting] = useState(false); const [error, setError] = useState("");
  const submit = async (payload: CreateCoursePayload) => { setSubmitting(true); setError(""); try { const response = await createCourse(payload); const id = response.data?.course._id; navigate(id ? `/courses/${id}` : "/manage-courses"); } catch (requestError) { setError(getApiErrorMessage(requestError, "Unable to add course.")); } finally { setSubmitting(false); } };
  return <main className="py-10 sm:py-12 lg:py-16"><Container className="max-w-5xl"><PageHeader eyebrow="Course creator" title="Add a new course" description="Publish clear, complete course information so learners can make an informed choice." /><div className="mt-8"><CourseForm submitLabel="Publish Course" submitting={submitting} error={error} onSubmit={submit} /></div></Container></main>;
};
export default AddCourse;
