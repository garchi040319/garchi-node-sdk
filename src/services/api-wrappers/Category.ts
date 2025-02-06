import { CreateCategoryParams, DeleteCategoryParams, GarchiCategory, UpdateCategoryParams } from "../../types";
import APIClient from "../APIClient";

class Category extends APIClient {

    async create(params: CreateCategoryParams) : Promise<GarchiCategory> {
        try {
            const response = await this.client.post("/category", params);
            let data = response.data as {
                data: GarchiCategory
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async delete(params: DeleteCategoryParams) : Promise<string> {
        try {
            const response = await this.client.post(`/delete/category/${params.space_uid}/${params.category_id}`);
            const data =  response.data as {
                data: string
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async update(params: UpdateCategoryParams) : Promise<string> {
        try {
            const response = await this.client.post(`/update/category/${params.category_id}`, {
                space_uid: params.space_uid,
                category: params.category
            });
            const data = response.data as {
                data: string
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async getAll() : Promise<GarchiCategory[]> {
        try {
            const response = await this.client.get("/categories");
            const data = response.data as {
                data: GarchiCategory[]
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }
}

export default Category;