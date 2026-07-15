export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type CourseSortOption = "newest" | "price-low" | "price-high" | "rating";

export interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  level: CourseLevel;
  price: number;
  rating: number;
  duration: string;
  image: string;
  additionalImages: string[];
  instructorName: string;
  totalStudents: number;
  createdBy: string;
  learningOutcomes: string[];
  requirements: string[];
  createdAt: string;
  updatedAt: string;
}

export type CreateCoursePayload = Pick<Course, "title" | "shortDescription" | "fullDescription" | "category" | "level" | "price" | "duration" | "image" | "additionalImages" | "learningOutcomes" | "requirements">;
export type UpdateCoursePayload = Partial<CreateCoursePayload>;

export interface CoursePagination { page: number; limit: number; totalItems: number; totalPages: number; }
export interface CourseListResponse { success: boolean; message: string; data: { courses: Course[]; pagination: CoursePagination }; }
export interface CourseDetailsResponse { success: boolean; message: string; data: { course: Course }; }
export interface MyCoursesResponse { success: boolean; message: string; data: { courses: Course[] }; }
export interface CourseMutationResponse { success: boolean; message: string; data: { course: Course } | null; }
export interface CourseQuery { search?: string; category?: string; maxPrice?: number; minimumRating?: number; sort?: CourseSortOption; page?: number; limit?: number; }
