import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema({
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  isImportant: {
    type: Boolean,
  },
  isCompleted: {
    type: Boolean,
  },
  body: {
    type: String,
  },
});

export const Task = mongoose.model("Task", taskSchema);
