import axios from "axios";
import * as cheerio from "cheerio";


export const scrapeSingleBlog = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const title = $("h1").first().text().trim();
  const content = [];

  $("article p").each((_, el) => {
    content.push($(el).text());
  });

  return {
    title,
    content: content.join("\n"),
    sourceUrl: url
  };
};
