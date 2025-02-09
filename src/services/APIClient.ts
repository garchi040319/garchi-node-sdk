import axios from "axios";
import { GarchiCMSInitOptions } from "../types";

class APIClient {

    client: Axios.AxiosInstance


    constructor(options: GarchiCMSInitOptions | null) {
        
        this.client = axios.create({
            baseURL: "https://garchi.co.uk/api/v2",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${options?.api_key || process.env.GARCHI_API_KEY}`,
                ...options?.headers
            }
        })

    }
}

export default APIClient;