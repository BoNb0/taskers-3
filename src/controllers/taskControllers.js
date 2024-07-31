import { Task } from "../models/tasksModels.js";

export const getTasks = async (req, res) => {
  const id = req.user._id;
  const displayname = req.user.displayname;
  try {
    const tasks = await Task.find({ taskId: id });
    const taskId = { task: tasks };
    console.log(taskId._id);
    //console.log(`the tasks are ${tasks}`);
    return res.render("tasks/alltasks", { username: displayname, task: tasks });
  } catch (error) {
    res.status(404).render("404");
  }
};

export const taskDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    res.render("tasks/taskdetails", { task: task });
  } catch (error) {
    res.status(404).render("404", { title: "404 not found" });
  }
};

export const createTask = async (req, res, next) => {
  let Important = req.body.isImportant;
  let Completed = req.body.isCompleted;

  Important ? (Important = true) : (Important = false);
  Completed ? (Completed = true) : (Completed = false);

  try {
    const task = await Task.create({
      taskId: req.user._id,
      title: req.body.title,
      body: req.body.body,
      isImportant: Important,
      isCompleted: Completed,
    });
    next();
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
};

export const deleteTask = async (req, res, next) => {
  console.log("hello");
  const id = req.params.id;
  try {
    const delTask = await Task.findByIdAndDelete(id);
    console.log("delete succesful");
    next();
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
};
