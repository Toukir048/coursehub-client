export interface CourseReview {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  duration: string;
  image: string;
  additionalImages: string[];
  instructorName: string;
  totalStudents: number;
  createdBy: string;
  createdAt: string;
  learningOutcomes: string[];
  requirements: string[];
  reviews: CourseReview[];
}