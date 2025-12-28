import express from "express";
import { createArticleFromUrl, getAllArticles, getArticleById, updateArticle, deleteArticle, updateArticleWithRewrite } from "../controllers/articleController.js";

const router = express.Router();

router.post("/", createArticleFromUrl);
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
router.put("/:id/rewrite", updateArticleWithRewrite);


export default router;
