import Article from "../models/ArticleModel.js";
import { scrapeSingleBlog } from "../utils/scrapeSingleBlog.js";

export const createArticleFromUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const scrapedData = await scrapeSingleBlog(url);

    const article = await Article.create({
      title: scrapedData.title,
      originalContent: scrapedData.content,
      sourceUrl: scrapedData.sourceUrl
    });

    res.status(201).json({
      success: true,
      data: article
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
