import { Router } from "express";
import authRoutes from "./authRoutes.js";
import signInRoutes from "./signInRoutes.js";
import userRoutes from "./usersRoutes.js";
import tasksRoutes from "./tasksRoutes.js";

const router = Router();

router.use(authRoutes);
router.use(signInRoutes);
router.use(userRoutes);
router.use(tasksRoutes);

router.get(`/`, (req, res) => {
  console.log("baseURL");
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

router.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

export default router;
