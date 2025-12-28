import express from "express";
import { createArticleFromUrl, getAllArticles, getArticleById } from "../controllers/articleController.js";

const router = express.Router();

router.post("/", createArticleFromUrl);

export default router;
