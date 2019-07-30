const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
// Middleware to enable body parser (ex: allow to get data in req.body)
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./route/api/users"));
app.use("/api/auth", require("./route/api/auth"));
app.use("/api/profile", require("./route/api/profile"));
app.use("/api/posts", require("./route/api/posts"));

// npm run server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
