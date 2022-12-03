import express from "express";
import { verifyToken } from "./middlewares/auth.js";
import tasksRoutes from "./routes/tasks.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express()

app.use(express.json())

app.use('/tasks', verifyToken ,tasksRoutes)

app.use(userRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})


export default app;