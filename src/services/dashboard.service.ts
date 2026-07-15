import apiClient from "../api/apiClient";
import type { DashboardResponse } from "../types/dashboard";
export const getStatistics = async () => (await apiClient.get<DashboardResponse>("/dashboard/statistics")).data;
