import { CompoundQueryBody, GarchiCategoryAPIResponse, GarchiItemAPIResponse, GarchiReview, ItemsQueryParams, PaginatedResponse } from "../../types";
import APIClient from "../APIClient";

class CompoundQuery extends APIClient {
    async query(body: CompoundQueryBody, params: ItemsQueryParams) : Promise<GarchiItemAPIResponse | GarchiCategoryAPIResponse | 
    PaginatedResponse<GarchiReview>>
    {
        try {
            const response = await this.client.post(`/compound_query`, body, {
                params
            });
            return response.data as GarchiItemAPIResponse | GarchiCategoryAPIResponse | PaginatedResponse<GarchiReview>;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }
}   

export default CompoundQuery;