import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/articles";

const fetchArticles = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data.data;
};

const start = async () => {
  const articles = await fetchArticles();
  console.log(`Fetched ${articles.length} articles`);

  for (const article of articles) {
    console.log("Processing:", article.title);
  }
};

start();
