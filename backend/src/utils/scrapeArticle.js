import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeArticle = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(data);

    let content = "";

    // Try common article selectors
    const article =
      $("article").text() ||
      $("main").text() ||
      $("div[class*='content']").text();

    content = article.replace(/\s+/g, " ").trim();

    return content.substring(0, 5000); // limit size for LLM
  } catch (error) {
    console.error("Scraping failed:", url);
    return "";
  }
};
