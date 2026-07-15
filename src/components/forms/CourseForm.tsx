import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import type { Course, CourseLevel, CreateCoursePayload } from "../../types/course.types";
import FormField from "../shared/FormField";

interface Props { course?: Course; submitLabel: string; submitting: boolean; error: string; onSubmit: (payload: CreateCoursePayload) => Promise<void>; }
const lines = (value: string) => value.split("\n").map((item) => item.trim()).filter(Boolean);
const levels: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];

const CourseForm = ({ course, submitLabel, submitting, error, onSubmit }: Props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ title: course?.title ?? "", shortDescription: course?.shortDescription ?? "", fullDescription: course?.fullDescription ?? "", category: course?.category ?? "", level: course?.level ?? "Beginner" as CourseLevel, price: String(course?.price ?? ""), duration: course?.duration ?? "", image: course?.image ?? "", additionalImages: course?.additionalImages.join("\n") ?? "", learningOutcomes: course?.learningOutcomes.join("\n") ?? "", requirements: course?.requirements.join("\n") ?? "" });
  const set = (name: keyof typeof values, value: string) => setValues((current) => ({ ...current, [name]: value }));
  const submit = (event: FormEvent) => { event.preventDefault(); const price = Number(values.price); if (price < 0) return; void onSubmit({ ...values, level: values.level as CourseLevel, price, additionalImages: lines(values.additionalImages), learningOutcomes: lines(values.learningOutcomes), requirements: lines(values.requirements) }); };
  const inputClass = "input input-bordered w-full border-primary/35 bg-base-100 shadow-sm transition-colors focus:border-primary focus:outline-2 focus:outline-primary/20";
  const textareaClass = "textarea textarea-bordered w-full border-primary/35 bg-base-100 shadow-sm transition-colors focus:border-primary focus:outline-2 focus:outline-primary/20";

  return <form onSubmit={submit} className="space-y-6">
    {error && <div className="alert alert-error" role="alert"><span>{error}</span></div>}
    <fieldset disabled={submitting} className="space-y-6 disabled:opacity-70">
      <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold">Basic information</h2><p className="mt-1 text-sm text-base-content/60">Give learners a clear overview of the course.</p>
        <div className="mt-6 space-y-5">
          <FormField label="Course title" required><input value={values.title} onChange={(e) => set("title", e.target.value)} className={inputClass} required minLength={5} /></FormField>
          <FormField label="Short description" required hint="A concise summary shown on course cards."><textarea value={values.shortDescription} onChange={(e) => set("shortDescription", e.target.value)} className={`${textareaClass} min-h-24`} required minLength={20} /></FormField>
          <FormField label="Full description" required><textarea value={values.fullDescription} onChange={(e) => set("fullDescription", e.target.value)} className={`${textareaClass} min-h-40`} required minLength={50} /></FormField>
        </div>
      </section>
      <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold">Course details</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormField label="Category" required><input value={values.category} onChange={(e) => set("category", e.target.value)} className={inputClass} required /></FormField>
          <FormField label="Level" required><select value={values.level} onChange={(e) => set("level", e.target.value)} className="select select-bordered w-full">{levels.map((level) => <option key={level}>{level}</option>)}</select></FormField>
          <FormField label="Price (৳)" required><input type="number" min="0" step="1" value={values.price} onChange={(e) => set("price", e.target.value)} className={inputClass} required /></FormField>
          <FormField label="Duration" required><input value={values.duration} onChange={(e) => set("duration", e.target.value)} className={inputClass} required /></FormField>
        </div>
      </section>
      <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold">Media</h2>
        <div className="mt-6 space-y-5"><FormField label="Cover image URL" required><input type="url" value={values.image} onChange={(e) => set("image", e.target.value)} className={inputClass} required /></FormField><FormField label="Additional image URLs" hint="Enter one image URL per line."><textarea value={values.additionalImages} onChange={(e) => set("additionalImages", e.target.value)} className={`${textareaClass} min-h-28`} /></FormField></div>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7"><h2 className="text-xl font-semibold">Learning outcomes</h2><div className="mt-5"><FormField label="What learners will achieve" hint="Enter one outcome per line."><textarea value={values.learningOutcomes} onChange={(e) => set("learningOutcomes", e.target.value)} className={`${textareaClass} min-h-40`} /></FormField></div></section>
        <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7"><h2 className="text-xl font-semibold">Requirements</h2><div className="mt-5"><FormField label="What learners need" hint="Enter one requirement per line."><textarea value={values.requirements} onChange={(e) => set("requirements", e.target.value)} className={`${textareaClass} min-h-40`} /></FormField></div></section>
      </div>
    </fieldset>
    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={() => navigate("/manage-courses")} disabled={submitting} className="btn btn-outline">Cancel</button><button type="submit" disabled={submitting} className="btn btn-primary min-w-40">{submitting && <span className="loading loading-spinner loading-sm" />}{submitLabel}</button></div>
  </form>;
};
export default CourseForm;
