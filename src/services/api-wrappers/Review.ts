import { GarchiReview, GarchiReviewCreate, PaginateQueryParams, GarchiReviewUpdate, PaginatedResponse } from "../../types";
import APIClient from "../APIClient";

class Review extends APIClient{
    async create(params: GarchiReviewCreate): Promise<GarchiReview> {
        try {
            const response = await this.client.post('/reviews/item', params);
            const data = response.data as {
                data: GarchiReview
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async update(params: GarchiReviewUpdate): Promise<string> {
        try {
            const response = await this.client.post('/reviews/edit', params);
            const data = response.data as {
                message: string
            }
            return data.message;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async delete(review_id: number): Promise<string> {
        try {
            const response = await this.client.post(`/reviews/delete`, {
                review_id
            });
            const data = response.data as {
                message: string
            }
            return data.message;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async getByItem(item_id: number | string, queryParams: PaginateQueryParams) : Promise<PaginatedResponse<GarchiReview>> {
        try {
            const response = await this.client.get(`/reviews/item/${item_id}`, {
                params: queryParams
            });
            const data = response.data as PaginatedResponse<GarchiReview>;
            return data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }
}

export default Review;