const Comment = require("../models/Comment");

const postComment = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const newComment = new Comment({ message });
    await newComment.save();

    res.status(201).json({ message: "Comment posted!", comment: newComment });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};

module.exports = { postComment };
