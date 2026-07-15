export interface Category {
  title: string;
  description: string;
  courseCount: number;
}

export interface FeaturedCourse {
  id: number;
  title: string;
  shortDescription: string;
  category: string;
  price: number;
  rating: number;
  duration: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const categories: Category[] = [
  {
    title: "Web Development",
    description:
      "Learn modern frontend and backend technologies through practical projects.",
    courseCount: 12,
  },
  {
    title: "Programming",
    description:
      "Improve problem-solving skills with C, C++, Python, and JavaScript.",
    courseCount: 9,
  },
  {
    title: "UI/UX Design",
    description:
      "Create clear, responsive, and user-friendly digital experiences.",
    courseCount: 7,
  },
  {
    title: "Database",
    description:
      "Understand database design, MongoDB, queries, and data management.",
    courseCount: 6,
  },
];

export const featuredCourses: FeaturedCourse[] = [
  {
    id: 1,
    title: "React and TypeScript Fundamentals",
    shortDescription:
      "Build reusable React components and reliable web applications using TypeScript.",
    category: "Web Development",
    price: 2500,
    rating: 4.8,
    duration: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Node.js REST API Development",
    shortDescription:
      "Create secure backend APIs using Node.js, Express, MongoDB, and JWT.",
    category: "Backend Development",
    price: 2800,
    rating: 4.7,
    duration: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "MongoDB Database Essentials",
    shortDescription:
      "Learn document databases, schema design, filtering, and aggregation.",
    category: "Database",
    price: 1800,
    rating: 4.6,
    duration: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Competitive Programming with C++",
    shortDescription:
      "Strengthen algorithms, data structures, and programming contest skills.",
    category: "Programming",
    price: 2200,
    rating: 4.9,
    duration: "12 weeks",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nadia Rahman",
    role: "Frontend learner",
    message:
      "The structured lessons helped me understand React components and TypeScript more clearly.",
  },
  {
    name: "Saiful Hasan",
    role: "CSE student",
    message:
      "CourseHub provides practical course information without making the learning process confusing.",
  },
  {
    name: "Rakib Ahmed",
    role: "Junior developer",
    message:
      "The project-focused learning approach helped me become more confident while building applications.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why TypeScript Is Helpful for React Developers",
    summary:
      "Learn how TypeScript can prevent common mistakes and improve code readability.",
    date: "July 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding REST APIs as a Beginner",
    summary:
      "A simple introduction to requests, responses, routes, and HTTP methods.",
    date: "July 6, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "How MongoDB Stores Application Data",
    summary:
      "Understand collections, documents, schemas, and basic database operations.",
    date: "July 2, 2026",
    readTime: "7 min read",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do I need programming experience to join?",
    answer:
      "No. CourseHub includes beginner-level courses as well as intermediate and advanced learning options.",
  },
  {
    question: "Can registered users add courses?",
    answer:
      "Yes. Logged-in users can add courses and manage the courses they have created.",
  },
  {
    question: "Can I search and filter courses?",
    answer:
      "Yes. The explore page supports search, category filtering, price filtering, sorting, and pagination.",
  },
  {
    question: "Are course details publicly accessible?",
    answer:
      "Yes. Visitors can view course descriptions, key information, reviews, and related courses without logging in.",
  },
];