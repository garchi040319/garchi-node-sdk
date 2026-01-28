import { CreatePageResponse, GarchiCategory, GarchiSpace, GarchiSpaceAPIResponse, GarchiSpaceCreate, PaginatedResponse, PaginateQueryParams, SectionTemplate } from "../../types";
import APIClient from "../APIClient";

class Space extends APIClient {
   

    async categories(space_uid: string) : Promise<GarchiCategory[]> {
        try {
            const response = await this.client.get(`/space/${space_uid}/categories`);
            const data = response.data as {
                data: GarchiCategory[]
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async getAll(params: PaginateQueryParams) : Promise<GarchiSpaceAPIResponse> {
        try {
            const response = await this.client.get('/spaces', {
                params
            });
            const data = response.data as GarchiSpaceAPIResponse;
            return data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    } 
    
    async get(space_uid: string) : Promise<GarchiSpace> {
        try {
            const response = await this.client.get(`/space/${space_uid}`);
            const data = response.data as {
                data: GarchiSpace
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async create(params: GarchiSpaceCreate): Promise<GarchiSpace> {
        try {
            const formData = new FormData()
            formData.append('name', params.name)
            if(params.logo) {
                formData.append('logo', params.logo)
            }
            const response = await this.client.post('/space', formData);
            const data = response.data as {
                data: GarchiSpace
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async update(space_uid: string, params: {
        name?: string,
        logo?: File
    }) : Promise<string> {
        try {
            const formData = new FormData();
            if(params.name) {
                formData.append('name', params.name)
            }
            if(params.logo) {
                formData.append('logo', params.logo)
            }
            const response = await this.client.post(`/update/space/${space_uid}`, formData);
            const data = response.data as {
                data: string
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async delete(space_uid: string) : Promise<string> {
        try {
            const response = await this.client.delete(`/delete/space/${space_uid}`);
            const data = response.data as {
                data: string
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async listPages(space_uid: string) : Promise<CreatePageResponse[]> {
        try {
            const response = await this.client.get(`/space/${space_uid}/pages`);
            const data = response.data
            return data as CreatePageResponse[];
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async listSectionTemplates(space_uid: string) : Promise<SectionTemplate[]> {
        try {
            const response = await this.client.get(`/space/${space_uid}/section_templates`);
            const data = response.data
            return data as SectionTemplate[];
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

}
export default Space;