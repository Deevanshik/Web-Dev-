import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Ethan" },
  { id: 6, name: "Fiona" },
  { id: 7, name: "George" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Ian" },
  { id: 10, name: "Julia" },
];

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/api/users" && req.method === "GET") {
    res.write(JSON.stringify(users));
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const user_id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(user_id));
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
    }
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
  }
  res.end();
});
 
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
