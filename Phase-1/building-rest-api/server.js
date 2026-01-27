import express from "express";
import users from "./routes/users.routes.js";
import errorHandler from "./middlewares/error.middlewares.js";
import notFoundHandler from "./middlewares/notFound.middlewares.js";
import path from "path";
import url from "url";

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.use("/api/users", users);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
