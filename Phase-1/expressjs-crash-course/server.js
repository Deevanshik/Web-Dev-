import express from "express";
import path from "path";
import url from "url";
const PORT = process.env.PORT || 5000;

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const app = express();

app.get("/", (req, res) => {
  const file_path = path.join(__dirname, "public", "home.html");
  res.sendFile(file_path);
});
app.get("/about", (req, res) => {
  const file_path = path.join(__dirname, "public", "about.html");
  res.sendFile(file_path);
});

// Serving using static server
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
