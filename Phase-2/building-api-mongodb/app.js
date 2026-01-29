import express from "express";
import users from "./routes/users.routes.js";
import path from "path";
import url from "url";

const app = express();

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

app.use(express.static(path.join(__dirname, "frontend")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", users);

export default app;
