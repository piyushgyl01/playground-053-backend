const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pg53User",
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pg53Article",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pg53Comment", commentSchema);
