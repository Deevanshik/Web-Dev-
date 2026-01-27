const notFoundHandler = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  err.status = 404;
  next(err);
};

export default notFoundHandler;
