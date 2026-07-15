import { useState } from "react";
import { useNavigate } from "react-router";
import CourseForm from "../../components/forms/CourseForm";
import Container from "../../components/shared/Container";
import { createCourse } from "../../services/course.service";
import type { CreateCoursePayload } from "../../types/course.types";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";
const AddCourse = () => { const navigate = useNavigate(); const [submitting,setSubmitting]=useState(false); const [error,setError]=useState(""); const submit=async(payload:CreateCoursePayload)=>{setSubmitting(true);setError("");try{const response=await createCourse(payload);const id=response.data?.course._id;navigate(id ? `/courses/${id}` : "/manage-courses");}catch(e){setError(getApiErrorMessage(e,"Unable to add course."));}finally{setSubmitting(false);}};return <main className="py-16"><Container><div className="mx-auto max-w-3xl"><h1 className="mb-8 text-4xl font-bold">Add a New Course</h1><CourseForm submitLabel="Add Course" submitting={submitting} error={error} onSubmit={submit}/></div></Container></main>;};
export default AddCourse;
