import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    originalContent: {
      type: String,
      required: true
    },
    updatedContent: {
      type: String,
      default: null
    },
    sourceUrl: {
      type: String,
      required: true
    },
    references: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Article", articleSchema);
