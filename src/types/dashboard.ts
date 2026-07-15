export interface DashboardSummary { totalCourses: number; totalReviews: number; averagePrice: number; }
export interface CategoryChartItem { category: string; total: number; }
export interface PriceChartItem { range: string; total: number; }
export interface RatingChartItem { rating: string; total: number; }
export interface RecentCourse { _id: string; title: string; category: string; price: number; rating: number; createdAt: string; }
export interface DashboardStatistics { summary: DashboardSummary; categoryData: CategoryChartItem[]; priceData: PriceChartItem[]; ratingData: RatingChartItem[]; recentCourses: RecentCourse[]; }
export interface DashboardResponse { success: boolean; message: string; data: DashboardStatistics; }
