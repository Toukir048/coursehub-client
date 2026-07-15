import axios from "axios";

export const getApiErrorMessage = (error: unknown, fallback: string) => {
  if (axios.isAxiosError<{ message?: string }>(error)) return error.response?.data?.message ?? error.message ?? fallback;
  if (error instanceof Error) return error.message;
  return fallback;
};
