const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    addedDay: {
      type: Date,
      default: Date.now,
    },
    category: {
      type: String,
      enum: ["General", "Vocabulary", "Phrases", "Advanced"],
      default: "General",
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lastReviewed: {
      type: Date,
    },
    isMemorized: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flashcard", flashcardSchema);
