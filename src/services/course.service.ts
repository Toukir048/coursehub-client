import apiClient from "../api/apiClient";
import type { CourseDetailsResponse, CourseListResponse, CourseMutationResponse, CourseQuery, CreateCoursePayload, MyCoursesResponse, UpdateCoursePayload } from "../types/course.types";

export const getCourses = async (params: CourseQuery = {}) => (await apiClient.get<CourseListResponse>("/courses", { params })).data;
export const getCourseById = async (id: string) => (await apiClient.get<CourseDetailsResponse>(`/courses/${id}`)).data;
export const createCourse = async (payload: CreateCoursePayload) => (await apiClient.post<CourseMutationResponse>("/courses", payload)).data;
export const getMyCourses = async () => (await apiClient.get<MyCoursesResponse>("/courses/mine")).data;
export const updateCourse = async (id: string, payload: UpdateCoursePayload) => (await apiClient.patch<CourseMutationResponse>(`/courses/${id}`, payload)).data;
export const deleteCourse = async (id: string) => (await apiClient.delete<CourseMutationResponse>(`/courses/${id}`)).data;
