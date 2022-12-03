import { Router } from "express";
import {getAllTasksController, getTaskController ,createTaskController, updateTaskController, deleteTaskController} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getAllTasksController);

router.get("/:id_task", getTaskController);

router.post("/", createTaskController);

router.patch("/:id_task", updateTaskController);

router.delete("/:id_task", deleteTaskController);

export default router;