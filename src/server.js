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

const allowedOrigins = [
  process.env.CLIENT_URL_DEV,
  process.env.CLIENT_URL_PROD,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
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
