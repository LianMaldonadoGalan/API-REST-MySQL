import {pool} from "../db.js"

export const getAllTasks = async () => {
    const [rows] = await pool.query("SELECT * FROM tasks");
    return (rows);
}

export const getTaskById = async (id) => {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
        id,
      ]);
    return (result);
}

export const createTask = async (task) => {
    await pool.query(
        "INSERT INTO tasks (task_title, task_desc, task_status, due_date, commentaries, responsible, tags) values (?, ?, ?, ?, ?, ?, ?)",
        [
          task.task_title,
          task.task_desc,
          task.task_status,
          task.due_date,
          task.commentaries,
          task.responsible,
          task.tags,
        ]
      );
}

export const updateTask = async (id, data, res) => {

    const [result] = await pool.query(
        "UPDATE tasks set task_title = IFNULL(?, task_title), task_desc = IFNULL(?, task_desc), task_status = IFNULL(?, task_status), due_date = IFNULL(?, due_date), commentaries = IFNULL(?, commentaries), responsible = IFNULL(?, responsible), tags = IFNULL(?, tags) WHERE id = ?",
        [data.task_title,data.task_desc,data.task_status,data.due_date,data.commentaries,data.responsible,data.tags,id]
        );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Task not found",
      });
}


export const deleteTask = async (id, res) => {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
        id,
      ]);
    if (result.affectedRows <= 0)
    return res.status(404).json({
        message: "Task not found",
    });
    res.sendStatus(204);
}