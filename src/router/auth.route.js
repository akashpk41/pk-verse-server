import express from "express";
import {
  login,
  logout,
  onBoard,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding", onBoard);

// check if user is logged in ;
router.get("/me", (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
