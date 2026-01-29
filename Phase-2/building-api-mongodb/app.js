import express from "express";
import users from "./routes/users.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", users);

export default app;
