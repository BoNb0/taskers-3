import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema, createTaskValidationSchema } from "../utils/validationSchemas.js";
import { checkAuth } from "../controllers/authControllers.js";
import { createTask } from "../controllers/taskControllers.js";
import { getTasks } from "../controllers/taskControllers.js";
import { taskDetails } from "../controllers/taskControllers.js";
import { deleteTask } from "../controllers/taskControllers.js";

const router = Router();

router.get("/api/tasks", checkAuth, getTasks);

router.get("/api/createtask", checkAuth, (req, res) => {
  res.render("tasks/createtask");
});

router.post("/api/createtask", checkAuth, checkSchema(createTaskValidationSchema), createTask, (req, res) => {
  res.redirect("/api/tasks");
});

router.get("/api/tasks/:id", checkAuth, taskDetails);

router.delete("/api/tasks/:id", checkAuth, deleteTask, (req, res) => {
  res.redirect("/api/tasks");
});

export default router;
