import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/articles`;

export const getArticles = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data.data;
};

export const getArticleById = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/${id}`);
  return res.data.data;
};
