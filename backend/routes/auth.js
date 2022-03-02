import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js";

import imgUploader from "../utils/imgUploader.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/upload", imgUploader.single("image"), (req, res) =>
  res.send(`/${req.file.path.replace("\\", "/")}`)
);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:resettoken", resetPassword);

export default router;
