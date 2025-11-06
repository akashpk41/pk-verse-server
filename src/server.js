import "dotenv/config";
import express from "express";
import authRoute from "./router/auth.route.js";
import { connectDB } from "./lib/db.js";
// configure
const app = express();
const PORT = process.env.PORT || 3000;

// routes
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server Is Running🔥 ${PORT} `);
  connectDB()
});
