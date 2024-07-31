import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema, createTaskValidationSchema } from "../utils/validationSchemas.js";
import { createUserHandler } from "../controllers/userControllers.js";

const router = Router();

router.post("/api/user/signup", checkSchema(createUserValidationSchema), createUserHandler, (req, res) => {
  res.redirect("/api/login");
});

export default router;
