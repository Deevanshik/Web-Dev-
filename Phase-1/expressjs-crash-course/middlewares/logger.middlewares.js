import "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "yellow",
    PUT: "blue",
    DELETE: "red",
  };

  const color = methodColors[req.method] || "white";
  console.log(req.method[color]);

  next();
};

export default logger;
