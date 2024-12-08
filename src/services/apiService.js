import axios from "axios";

const API_BASE_URL = "http://localhost:5000/agreements";

export const fetchAgreements = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createAgreement = async (agreement) => {
  const response = await axios.post(API_BASE_URL, agreement);
  return response.data;
};

export const updateAgreement = async (id, agreement) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, agreement);
  return response.data;
};

export const deleteAgreement = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
