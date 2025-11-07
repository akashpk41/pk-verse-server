import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoute from "./router/auth.route.js";
import chatRoutes from "./router/chat.route.js";
import userRoutes from "./router/user.route.js";
// configure
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  })
);

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.listen(PORT, () => {
  console.log(`Server Is Running🔥 ${PORT} `);
  connectDB();
});
