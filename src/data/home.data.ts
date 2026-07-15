export interface Category {
  title: string;
  description: string;
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
  { title: "Web Development", description: "Learn modern frontend and backend technologies through practical projects." },
  { title: "Programming", description: "Improve problem-solving skills with C, C++, Python, and JavaScript." },
  { title: "UI/UX Design", description: "Create clear, responsive, and user-friendly digital experiences." },
  { title: "Database", description: "Understand database design, MongoDB, queries, and data management." },
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Why TypeScript Is Helpful for React Developers", summary: "Learn how TypeScript can prevent common mistakes and improve code readability.", date: "July 10, 2026", readTime: "5 min read" },
  { id: 2, title: "Understanding REST APIs as a Beginner", summary: "A simple introduction to requests, responses, routes, and HTTP methods.", date: "July 6, 2026", readTime: "6 min read" },
  { id: 3, title: "How MongoDB Stores Application Data", summary: "Understand collections, documents, schemas, and basic database operations.", date: "July 2, 2026", readTime: "7 min read" },
];

export const faqItems: FaqItem[] = [
  { question: "Do I need programming experience to join?", answer: "No. CourseHub includes beginner-level courses as well as intermediate and advanced learning options." },
  { question: "Can registered users add courses?", answer: "Yes. Logged-in users can add courses and manage the courses they have created." },
  { question: "Can I search and filter courses?", answer: "Yes. The explore page supports search, category filtering, price filtering, sorting, and pagination." },
  { question: "Are course details publicly accessible?", answer: "Yes. Visitors can view course descriptions, key information, reviews, and related courses without logging in." },
];
