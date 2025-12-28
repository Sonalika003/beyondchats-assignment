import dotenv from "dotenv";
dotenv.config();


import axios from "axios";
import { searchGoogle } from "../src/utils/googleSearch.js";

const API_BASE_URL = "http://localhost:5000/api/articles";

const fetchArticles = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data.data;
};

const start = async () => {
  const articles = await fetchArticles();

  for (const article of articles) {
    console.log("\n🔍 Searching for:", article.title);

    const links = await searchGoogle(article.title);

    console.log("Top reference links:");
    console.log(links);
  }
};

start();
