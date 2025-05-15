const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      required: true,
      unique: true,
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pg53Article",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pg53Tag", tagSchema);
