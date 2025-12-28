import express from "express";
import { createArticleFromUrl, getAllArticles } from "../controllers/articleController.js";

const router = express.Router();

router.post("/", createArticleFromUrl);

export default router;
