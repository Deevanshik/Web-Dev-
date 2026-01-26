import http from "http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(500, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Server got some error",
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
