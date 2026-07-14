export interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  price: number;
  rating: number;
  duration: string;
  image: string;
  additionalImages: string[];
  instructorName: string;
  createdBy: string;
  createdAt: string;
}