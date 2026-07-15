import apiClient from "../api/apiClient";
import type { CourseReviewsResponse, CreateReviewPayload, MyReviewsResponse, ReviewMutationResponse } from "../types/review";
export const createReview = async (payload: CreateReviewPayload) => (await apiClient.post<ReviewMutationResponse>("/reviews", payload)).data;
export const getCourseReviews = async (id: string) => (await apiClient.get<CourseReviewsResponse>(`/reviews/course/${id}`)).data;
export const getMyReviews = async () => (await apiClient.get<MyReviewsResponse>("/reviews/mine")).data;
export const deleteReview = async (id: string) => (await apiClient.delete<ReviewMutationResponse>(`/reviews/${id}`)).data;
