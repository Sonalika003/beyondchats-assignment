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

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({
      success: true,
      data: article
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({
      success: true,
      data: article
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({
      success: true,
      message: "Article deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateArticleWithRewrite = async (req, res) => {
  const { id } = req.params;
  const { rewrittenContent, references, isRewritten } = req.body;

  const updated = await Article.findByIdAndUpdate(
    id,
    {
      rewrittenContent,
      references,
      isRewritten
    },
    { new: true }
  );

  res.status(200).json({
    success: true,
    data: updated
  });
};
