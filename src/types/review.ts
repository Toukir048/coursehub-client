export interface Review { _id: string; course: string; user: string; userName: string; userImage: string; rating: number; comment: string; createdAt: string; updatedAt: string; }
export interface CreateReviewPayload { courseId: string; rating: number; comment: string; }
export interface CourseReviewsResponse { success: boolean; message: string; data: { reviews: Review[] }; }
export type MyReviewsResponse = CourseReviewsResponse;
export interface ReviewMutationResponse { success: boolean; message: string; data: { review: Review } | null; }
