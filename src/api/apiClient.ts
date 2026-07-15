import axios from "axios";

export const ACCESS_TOKEN_KEY = "coursehub-access-token";

const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ?? "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
