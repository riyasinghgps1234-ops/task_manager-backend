const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Connect DB
connectDB();

// 3. Status Route (Add this to test in your browser!)
app.get("/", (req, res) => {
  res.send("Server is up and running! Access tasks at /api/tasks");
});

// 4. Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// 5. Port Configuration (Changed from 5000 to 5001)
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});