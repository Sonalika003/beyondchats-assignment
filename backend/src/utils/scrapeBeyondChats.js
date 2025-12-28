import axios from "axios";
import * as cheerio from "cheerio";


const BLOG_URL = "https://beyondchats.com/blogs/";

export const scrapeBeyondChatsBlogs = async () => {
  const { data } = await axios.get(BLOG_URL);
  const $ = cheerio.load(data);

  const blogLinks = [];

  $(".blog-card a").each((_, element) => {
    const link = $(element).attr("href");
    if (link) {
      blogLinks.push(`https://beyondchats.com${link}`);
    }
  });

  // Get last 5 (oldest)
  const oldestBlogs = blogLinks.slice(-5);

  return oldestBlogs;
};
