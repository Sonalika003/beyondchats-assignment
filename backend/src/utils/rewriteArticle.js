import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const rewriteArticle = async ({ title, originalContent, referenceContents }) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Rewrite article titled "${title}" using provided references...`
        }
      ],
      temperature: 0.7
    });

    return response.choices[0].message.content;
  } catch (error) {
    if (error.code === "insufficient_quota") {
      console.log("⚠️ OpenAI quota exceeded. Skipping AI rewrite.");
      return "[AI rewrite skipped due to quota limit]";
    }
    throw error;
  }
};
