// api.js - Simplified version
import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchElectionResults = async () => {
    try {
        const response = await axios.get(`${API_URL}/results`, {
            timeout: 5000 // Add request timeout
        });

        // Validate response structure
        if (!Array.isArray(response.data)) {
            console.error("Unexpected API response structure");
            return [];
        }

        return response.data; // Return the data as-is
    } catch (error) {
        console.error("Error fetching election results:", error);
        return []; // Return empty array instead of null
    }
};