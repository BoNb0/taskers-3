import { Router } from "express";
import passport from "passport";
import { login, checkAuth, logout } from "../controllers/authControllers.js";

const router = Router();

router.get("/api/login", (req, res, next) => {
  res.render("accounts/login", { title: "Login to Account" });
});

router.post("/api/auth/login", passport.authenticate("local"), login);

router.get("/api/auth/status", checkAuth);

router.post("/api/auth/logout", logout);

export default router;
