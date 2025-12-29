import axios from "axios";

const API_BASE = "http://localhost:5000/api/articles";

export const getArticles = () => axios.get(API_BASE);
export const getArticleById = (id) => axios.get(`${API_BASE}/${id}`);
