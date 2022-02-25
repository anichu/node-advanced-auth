const express = require("express");

require("dotenv").config({ path: "./config.env" });

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// COnnect DB
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
