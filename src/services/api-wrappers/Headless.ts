import { BlankSectionRequest, BlankSectionResponse, CreateOrUpdateSectionTemplateParams, CreatePageRequest, CreatePageResponse, GarchiAsset, GarchiPage, GetPageParams } from "../../types";
import APIClient from "../APIClient";

class Headless extends APIClient {

    async getAsset(file_name: string, space_uid: string) : Promise<GarchiAsset> {
        try {
            const response = await this.client.get(`/space/assets/${file_name}`, {
                params: {
                    space_uid
                }
            });
            return response.data as GarchiAsset;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async getPage(params: GetPageParams) : Promise<GarchiPage> {
        try {
            const response = await this.client.post(`/page`, params);
            return response.data as GarchiPage;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async createOrUpdateSectionTemplates(params: CreateOrUpdateSectionTemplateParams) : Promise<string> {
        try {
            const response = await this.client.post(`/section_template`, params);
            return response.data as string;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async addPage(params: CreatePageRequest) : Promise<CreatePageResponse>
    {
        try {
            const response = await this.client.post(`/space/${params.space_uid}/create_page`, {
                title: params.title,
                path: params.path,
                description: params.description,
            })
            return response.data as CreatePageResponse;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async addBlankSectionToPage(params: BlankSectionRequest) : Promise<BlankSectionResponse>
    {
        try {
            const response = await this.client.post('/page/add_blank_section', {
                section_template_id: params.section_template_id,
                parent_id: params.parent_id,
                page_id: params.page_id,
            })
            return response.data as BlankSectionResponse;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }
    
    
}

export default Headless;