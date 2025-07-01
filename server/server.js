
const express = require("express");
const connectDB = require("./config/db");
const commentRoutes = require("./router/Comment");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api", commentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
