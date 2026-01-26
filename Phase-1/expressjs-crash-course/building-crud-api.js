import express from "express";
import users from "./routes/users.routes.js";
import errorHandler from "./middlewares/error.middlewares.js";
import notFoundHandler from "./middlewares/notFound.middlewares.js";
import logger from "./middlewares/logger.middlewares.js";
import path from "path";
import url from "url";

const PORT = process.env.PORT || 5000;

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// logger
app.use(logger)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// basic routing
app.use("/api/users", users);

// page not found handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
