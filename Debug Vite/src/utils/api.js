import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchCandidates = async () => {
  try {
    const response = await axios.get(`${API_URL}/candidates`);
    return response.data;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    return [];
  }
};

export const voteForCandidate = async (candidateId) => {
  try {
    const response = await axios.post(`${API_URL}/vote`, { candidateId });
    return response.data;
  } catch (error) {
    console.error("Error voting:", error);
    throw error;
  }
};

export const fetchResults = async () => {
  try {
    const response = await axios.get(`${API_URL}/results`);
    return response.data;
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};
