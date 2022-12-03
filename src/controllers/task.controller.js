import { pool } from "../db.js";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "../services/task.service.js";

export const getAllTasksController = async (req, res) => {
  try {
     const response = await getAllTasks();
     res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getTaskController = async (req, res) => {
  const { id_task } = req.params;

  try {
    if (!id_task) {
      return res.status(400).json({
        message: "id is required",
      });
    }

    const response = await getTaskById(id_task);
    
    if (response.length <= 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createTaskController = async (req, res) => {
  const task = {
    task_title: req.body.task_title,
    task_desc: req.body.task_desc,
    task_status: req.body.task_status,
    due_date: req.body.due_date,
    commentaries: req.body.commentaries,
    responsible: req.body.responsible,
    tags: req.body.tags,
  };

  if (!task.task_title || !task.task_desc || !task.task_status || !task.due_date) {
    return res.status(400).json({
      message: "Missing values",
    });
  }


  try {
    await createTask(task);
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while inserting a task",
    });
  }
};

export const updateTaskController = async (req, res) => {
  const { id_task } = req.params;

  const task = {
    task_title: req.body.task_title,
    task_desc: req.body.task_desc,
    task_status: req.body.task_status,
    due_date: req.body.due_date,
    commentaries: req.body.commentaries,
    responsible: req.body.responsible,
    tags: req.body.tags,
  };

  /*if (!task.task_title || !task.task_desc || !task.task_status || !task.due_date) {
    return res.status(400).json({
      message: "Missing values",
    });
  }*/

  try {

    await updateTask(id_task, task, res);

    const response = await getTaskById(id_task);

    res.json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while updating a task",
    });
  }
};

export const deleteTaskController = async (req, res) => {
  const { id_task } = req.params;

  if (!id_task) {
    return res.status(400).json({
      message: "id is required",
    });
  }

  try {
    await deleteTask(id_task, res);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while deleting a task",
    });
  }
};
