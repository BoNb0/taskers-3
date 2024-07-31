import { Router } from "express";
import { query, validationResult, body, matchedData, checkSchema } from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.js";
import { createUserHandler } from "../controllers/userControllers.js";

const router = Router();

router.get("/api/signup", (req, res) => {
  res.render("accounts/signup", { title: "Signup Account" });
});

export default router;
