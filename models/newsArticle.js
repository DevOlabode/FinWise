const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewsArticleSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: { type:
        String,
        required: true
    },
    summary: {
        type: String
    },
    content: {
        type: String
    },

    url: {
        type: String,
        required: true
    },
    source: {
        type: String
    },

    category: {
        type: String,
        enum: [
            "economy",
            "markets",
            "stocks",
            "crypto",
            "forex",
            "policy",
            "general"
        ],
        default: "general"
    },

    topics: [String],
    sentiment: {
        type: String,
        enum: ["positive", "neutral", "negative"]
    },

    publishedAt: {
        type: Date
    },
    fetchedAt: {
        type: Date,
        default: Date.now
    },

    popularityScore: {
        type: Number
    }
});

module.exports = mongoose.model("NewsArticle", NewsArticleSchema);
