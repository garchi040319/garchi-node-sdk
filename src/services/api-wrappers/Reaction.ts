import { GarchiReaction, GarchiReactionCreate } from "../../types";
import APIClient from "../APIClient";

class Reaction extends APIClient {
    async manage(params: GarchiReactionCreate) : Promise<GarchiReaction> {
        try {
            const response = await this.client.post("/manage-reaction", params);
            let data = response.data as {
                data: GarchiReaction
            }
            return data.data;
        } catch (error: any) {
            throw error.response?.data || new Error("Network Error");
        }
    }
}

export default Reaction;