// npm install mongodb mongoose express cors bcrypt

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/users.routes");
const todoRoutes = require("./routes/todos.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "UPDATE", "DELETE", "PATCH", "PUT"]
}));
app.use(express.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/user", userRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));