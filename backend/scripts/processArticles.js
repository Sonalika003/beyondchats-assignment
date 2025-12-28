import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import { searchGoogle } from "../src/utils/googleSearch.js";
import { scrapeArticle } from "../src/utils/scrapeArticle.js";
import { rewriteArticle } from "../src/utils/rewriteArticle.js";


const API_BASE_URL = "http://localhost:5000/api/articles";

const fetchArticles = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data.data;
};

const start = async () => {
  const articles = await fetchArticles();
for (const article of articles) {
  console.log("\n✍️ Rewriting:", article.title);

  const links = await searchGoogle(article.title);

  const referenceContents = [];

  for (const link of links) {
    const content = await scrapeArticle(link);
    if (content.length > 300) {
      referenceContents.push(content);
    }
  }

  if (referenceContents.length === 0) {
    console.log("❌ No reference content found, skipping...");
    continue;
  }

  const rewritten = await rewriteArticle({
    title: article.title,
    originalContent: article.content,
    referenceContents
  });

  console.log("✅ Rewritten article length:", rewritten.length);
}


};

start();
