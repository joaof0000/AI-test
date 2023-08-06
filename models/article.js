

const mongoose = require("mongoose");


const articleSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    photoUrl: { type: String, required: true },
    caption: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);



const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
