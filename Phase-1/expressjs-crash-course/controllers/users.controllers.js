let users = [
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

// @desc - gets all the users
// route - GET /api/users
const getUsers = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }
  res.status(200).json(users);
};

// @desc - gets a single user
// route - GET /api/users/:id
const getUser = (req, res, next) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    const error = new Error(`User with id ${id} was not found!`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(user);
};

// @desc - create a new user
// route - POST /api/users
const createUser = (req, res) => {
  const user_id = parseInt(req.body.id);
  const user_name = req.body.name;
  users.push({ id: user_id, name: user_name });
  res.status(200).json(users);
};

// @desc - update a user
// route - PUT /api/users/:id
const updateUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  const user_name = req.body.name;
  const user = users.find((user) => user.id === user_id);
  if (!user) {
    const error = new Error(`User with id: ${user_id} was not found!`);
    error.status = 404;
    return next(error);
  }
  user.name = user_name;
  res.status(201).json(user);
};

// @desc - delete a user
// route - DELETE /api/users/:id
const deleteUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === user_id);

  if (index === -1) {
    const error = new Error(`User with id: ${user_id} was not found!`);
    error.status = 404;
    return next(error);
  }
  users.splice(index, 1);
  res.status(204).json(users);
};

export {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
