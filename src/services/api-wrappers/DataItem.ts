

import { CreateDataItemParams, CreateMetaInfoParams, DeleteDataItemParams, DeleteMetaInfoParams, FilterItemsByMetaParams, FilterItemsParams, GarchiItem, GarchiItemAPIResponse, GarchiItemMeta, GetAllItemsParams, GetFeaturedItemsParams, GetItemChildrenParams, GetItemParams, GetItemsByIdsParams, GetItemsBySpaceParams, QueryItemsParams, SemanticSearchParams, UpdateDataItemParams, UpdateMetaInfoParams } from "../../types";
import APIClient from "../APIClient";

class DataItem extends APIClient {


    async create(params: CreateDataItemParams): Promise<GarchiItem> {
        try {
            const response = await this.client.post("/item", params);
            let data = response.data as {
                data: GarchiItem
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async delete(params: DeleteDataItemParams): Promise<string> {
        try {
            const response = await this.client.post(`/delete/item`, params);
            const data = response.data as {
                data: string
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }


    async update(params: UpdateDataItemParams): Promise<string> {
        try {
            const response = await this.client.post(`/update/item`, params);
            const data = response.data as {
                data: string
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async createMetaInfo(params: CreateMetaInfoParams): Promise<GarchiItemMeta[]> {
        try {
            const response = await this.client.post(`/item_meta`, params);
            const data = response.data as {
                data: GarchiItemMeta[]
            }
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async deleteMetaInfo(params: DeleteMetaInfoParams): Promise<string> {
        try {
            const response = await this.client.post(`/delete/item_meta`, params);
            const data = response.data as {
                data: string
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async updateMetaInfo(params: UpdateMetaInfoParams): Promise<string> {
        try {
            const response = await this.client.post(`/update/item_meta`, params);
            const data = response.data as {
                data: string
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async getBySpace(params: GetItemsBySpaceParams): Promise<GarchiItemAPIResponse> {
        try {
            const response = await this.client.get(`/space/${params.uid}/items`, {
                params: params
            });
            const data = response.data as GarchiItemAPIResponse;
            return data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async semanticSearch(params: SemanticSearchParams): Promise<GarchiItem[]> {
        try {
            const response = await this.client.get(`/items/semantic-search`, {
                params: params
            });
            const data = response.data as GarchiItemAPIResponse;
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async featured(params: GetFeaturedItemsParams) : Promise<GarchiItemAPIResponse> {
        try {
            const response = await this.client.get(`/items/featured`, {
                params: params
            });
            const data = response.data as GarchiItemAPIResponse;
            return data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async get(params: GetItemParams): Promise<GarchiItem> {
        try {
            const response = await this.client.get(`/item/${params.item}`, {
                params: params,
            });
            const data = response.data as GarchiItemAPIResponse
            return data.data[0] as GarchiItem;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }


    async getAll(params: GetAllItemsParams): Promise<GarchiItemAPIResponse> {
        try {
            const response = await this.client.get(`/items`, {
                params: params
            });
            const data = response.data as GarchiItemAPIResponse;
            return data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");

        }
    }

    async filter(params: FilterItemsParams) : Promise<GarchiItem[]> {
        try {
            const response = await this.client.post(`/items/filter`, params.body, {
                params: params.query
            });
            const data = response.data as GarchiItemAPIResponse;
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }

    }

    async filterByMeta(params: FilterItemsByMetaParams) : Promise<GarchiItem[]> {
        try {
            const response = await this.client.post(`/items/filter/bymeta`, params.body, {
                params: params.query
            });
            const data = response.data as GarchiItemAPIResponse;
            return data.data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    async getByIds(params: GetItemsByIdsParams) : Promise<GarchiItemAPIResponse> {
        try {
            const response = await this.client.post(`/items/byids`, params.body, {
                params: params.query
            });
            const data = response.data as GarchiItemAPIResponse;
            return data;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    /**
     * Query the published items of a space with conditions on their fields and
     * metadata, including nested JSON values. See the API docs for the operators.
     */
    async query(params: QueryItemsParams): Promise<GarchiItemAPIResponse> {
        try {
            const { uid, ...body } = params;
            const response = await this.client.post(`/space/${uid}/items/query`, body);
            return response.data as GarchiItemAPIResponse;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }

    /**
     * The published items inside an item (variants of a product, lessons of a
     * course), in their order. The parent itself must be published.
     */
    async getChildren(params: GetItemChildrenParams): Promise<GarchiItemAPIResponse> {
        try {
            const { uid, item, ...query } = params;
            const response = await this.client.get(`/space/${uid}/items/${encodeURIComponent(String(item))}/children`, {
                params: query
            });
            return response.data as GarchiItemAPIResponse;
        }
        catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }
}


export default DataItem;