# CourseHub Frontend

CourseHub is a responsive course discovery and management application backed by a real REST API.

## Key features

- Course discovery with search, filters, sorting, and pagination
- Course details, ratings, and authenticated review submission
- JWT registration, login, logout, and session restoration
- Protected course creation, editing, deletion, and dashboard analytics
- Responsive Tailwind CSS and daisyUI interface

## Technologies

React, Vite, TypeScript, React Router, Axios, Tailwind CSS, daisyUI, and Recharts.

## Pages

Public pages include Home, Courses, Course Details, About, Blogs, Contact, Login, Register, Privacy, Terms, and Not Found. Protected pages include Dashboard, Add Course, Edit Course, and Manage Courses.

## Environment setup

Copy `.env.example` to `.env` and configure:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

## Local installation

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Type-check and build into `dist` |
| `npm run preview` | Preview the production build |

## Application overview

Authentication uses a JWT stored under `coursehub-access-token`; protected API calls send it as a Bearer token, and startup restores the user through `/auth/me`. Registered users can publish courses, manage only authorized courses, submit reviews, and view course/review statistics. Administrators receive platform-wide dashboard statistics from the backend.

Backend repository: `YOUR_BACKEND_REPOSITORY_URL`

Live frontend: `YOUR_FRONTEND_LIVE_URL`

## Deployment

Set `VITE_API_URL` to the deployed API base URL and run `npm run build`. The included `netlify.toml` publishes `dist` and rewrites SPA routes to `index.html`.

## Screenshots

- Home: `ADD_HOME_SCREENSHOT`
- Courses: `ADD_COURSES_SCREENSHOT`
- Dashboard: `ADD_DASHBOARD_SCREENSHOT`

## Author

MD Toukir Sarder — [GitHub](https://github.com/Toukir048)
