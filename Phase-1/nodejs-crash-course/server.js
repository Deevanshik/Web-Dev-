import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    let filepath;
    if (req.method === "GET") {
      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "home.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not found");
      }
    } else {
      throw new Error("Server side issue is there");
    }

    const data = await fs.readFile(filepath);
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(500, {
      "content-type": "application/json",
    });
    console.log(error);
    res.end("Server side error occured");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
