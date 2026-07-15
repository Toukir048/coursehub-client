import type { Course } from "../types/course.types";

export const courses: Course[] = [
  {
    _id: "react-typescript",
    title: "React and TypeScript Fundamentals",
    shortDescription:
      "Build reusable React components and reliable frontend applications using TypeScript.",
    fullDescription:
      "This course introduces modern React development with TypeScript. Learners will understand components, props, state, events, hooks, routing, reusable UI patterns, and API integration through practical projects.",
    category: "Web Development",
    level: "Beginner",
    price: 2500,
    rating: 4.8,
    duration: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Arif Hossain",
    totalStudents: 320,
    createdBy: "user-1",
    createdAt: "2026-06-10",
    learningOutcomes: [
      "Create reusable React components",
      "Use TypeScript interfaces and types",
      "Manage state with React hooks",
      "Build a responsive frontend project",
    ],
    requirements: [
      "Basic HTML and CSS knowledge",
      "Basic JavaScript knowledge",
      "A computer with VS Code installed",
    ],
    reviews: [
      {
        id: 1,
        userName: "Nadia Rahman",
        rating: 5,
        comment:
          "The examples made React and TypeScript much easier to understand.",
        date: "July 8, 2026",
      },
      {
        id: 2,
        userName: "Rakib Ahmed",
        rating: 4,
        comment:
          "A useful beginner course with clear explanations and practical work.",
        date: "July 4, 2026",
      },
    ],
  },
  {
    _id: "node-rest-api",
    title: "Node.js REST API Development",
    shortDescription:
      "Develop secure REST APIs using Node.js, Express, MongoDB, and JWT.",
    fullDescription:
      "Learn how backend applications receive requests, validate data, communicate with MongoDB, protect private routes, and return structured API responses.",
    category: "Backend Development",
    level: "Intermediate",
    price: 2800,
    rating: 4.7,
    duration: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Mahmud Hasan",
    totalStudents: 245,
    createdBy: "user-2",
    createdAt: "2026-05-18",
    learningOutcomes: [
      "Create Express REST APIs",
      "Connect Node.js with MongoDB",
      "Implement JWT authentication",
      "Protect private API routes",
    ],
    requirements: [
      "JavaScript fundamentals",
      "Basic understanding of HTTP",
      "Node.js installed",
    ],
    reviews: [
      {
        id: 1,
        userName: "Saiful Hasan",
        rating: 5,
        comment:
          "The authentication section was especially helpful for my project.",
        date: "July 6, 2026",
      },
    ],
  },
  {
    _id: "mongodb-essentials",
    title: "MongoDB Database Essentials",
    shortDescription:
      "Understand MongoDB documents, collections, schemas, queries, and aggregation.",
    fullDescription:
      "This course explains MongoDB database concepts using practical examples. Learners will create collections, design schemas, perform CRUD operations, filter records, and connect MongoDB with Node.js.",
    category: "Database",
    level: "Beginner",
    price: 1800,
    rating: 4.6,
    duration: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Nusrat Jahan",
    totalStudents: 198,
    createdBy: "user-3",
    createdAt: "2026-04-22",
    learningOutcomes: [
      "Understand MongoDB collections and documents",
      "Perform CRUD operations",
      "Create Mongoose schemas",
      "Use filtering and aggregation",
    ],
    requirements: [
      "Basic programming knowledge",
      "No previous database experience required",
    ],
    reviews: [
      {
        id: 1,
        userName: "Imran Kabir",
        rating: 4,
        comment:
          "A clear introduction to MongoDB and Mongoose for beginners.",
        date: "June 29, 2026",
      },
    ],
  },
  {
    _id: "competitive-programming-cpp",
    title: "Competitive Programming with C++",
    shortDescription:
      "Improve algorithms, data structures, and contest problem-solving skills.",
    fullDescription:
      "Develop structured problem-solving skills using C++. The course covers time complexity, arrays, strings, sorting, searching, recursion, STL, and common contest strategies.",
    category: "Programming",
    level: "Intermediate",
    price: 2200,
    rating: 4.9,
    duration: "12 weeks",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Tanvir Ahmed",
    totalStudents: 410,
    createdBy: "user-4",
    createdAt: "2026-06-28",
    learningOutcomes: [
      "Analyze algorithm complexity",
      "Use C++ STL effectively",
      "Solve common contest problems",
      "Improve coding speed and accuracy",
    ],
    requirements: [
      "Basic C++ syntax",
      "Interest in problem solving",
    ],
    reviews: [
      {
        id: 1,
        userName: "Touhid Islam",
        rating: 5,
        comment:
          "The problem-solving techniques improved my Codeforces performance.",
        date: "July 10, 2026",
      },
    ],
  },
  {
    _id: "tailwind-responsive-design",
    title: "Responsive Design with Tailwind CSS",
    shortDescription:
      "Build responsive, consistent, and professional interfaces with Tailwind CSS.",
    fullDescription:
      "Learn responsive layout, spacing, typography, Flexbox, Grid, component design, breakpoints, and reusable interface patterns using Tailwind CSS.",
    category: "Web Development",
    level: "Beginner",
    price: 1600,
    rating: 4.5,
    duration: "5 weeks",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Sadia Akter",
    totalStudents: 180,
    createdBy: "user-5",
    createdAt: "2026-03-15",
    learningOutcomes: [
      "Create responsive layouts",
      "Use Tailwind breakpoints",
      "Build reusable interface components",
      "Maintain consistent spacing and design",
    ],
    requirements: ["Basic HTML and CSS"],
    reviews: [],
  },
  {
    _id: "javascript-modern-development",
    title: "Modern JavaScript Development",
    shortDescription:
      "Learn ES6+, arrays, objects, asynchronous code, modules, and API calls.",
    fullDescription:
      "Build a strong JavaScript foundation with modern syntax and real-world examples. Topics include functions, arrays, objects, destructuring, promises, async-await, modules, and fetch API.",
    category: "Programming",
    level: "Beginner",
    price: 2000,
    rating: 4.7,
    duration: "7 weeks",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Fahim Rahman",
    totalStudents: 365,
    createdBy: "user-6",
    createdAt: "2026-06-05",
    learningOutcomes: [
      "Use modern JavaScript syntax",
      "Work with arrays and objects",
      "Understand promises and async-await",
      "Fetch data from REST APIs",
    ],
    requirements: ["Basic HTML knowledge"],
    reviews: [],
  },
  {
    _id: "ui-ux-foundations",
    title: "UI/UX Design Foundations",
    shortDescription:
      "Learn interface design, user research, wireframes, prototypes, and usability.",
    fullDescription:
      "Understand how to design interfaces that are clear, accessible, and easy to use. The course covers user needs, visual hierarchy, wireframes, prototypes, and usability testing.",
    category: "UI/UX Design",
    level: "Beginner",
    price: 2300,
    rating: 4.4,
    duration: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Maliha Noor",
    totalStudents: 142,
    createdBy: "user-7",
    createdAt: "2026-02-20",
    learningOutcomes: [
      "Understand user-centered design",
      "Create wireframes and prototypes",
      "Apply visual hierarchy",
      "Evaluate interface usability",
    ],
    requirements: ["No previous design experience required"],
    reviews: [],
  },
  {
    _id: "python-problem-solving",
    title: "Python Problem Solving",
    shortDescription:
      "Practice Python fundamentals through structured programming problems.",
    fullDescription:
      "Learn Python syntax while solving meaningful problems. Topics include conditions, loops, functions, lists, dictionaries, files, and basic object-oriented programming.",
    category: "Programming",
    level: "Beginner",
    price: 1900,
    rating: 4.8,
    duration: "9 weeks",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1538439907460-1596cafd4eff?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=1000&q=80",
    ],
    instructorName: "Shakil Khan",
    totalStudents: 290,
    createdBy: "user-8",
    createdAt: "2026-05-30",
    learningOutcomes: [
      "Write structured Python programs",
      "Use lists and dictionaries",
      "Create reusable functions",
      "Solve beginner programming problems",
    ],
    requirements: ["No previous Python experience required"],
    reviews: [],
  },
];