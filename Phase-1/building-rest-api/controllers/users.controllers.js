import express from "express";
import users from "../data/users.data.js";
const getUsers = (req, res) => {
  res.status(200).json(users);
};

const getUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  const user = users.find((user) => user.id === user_id);
  if (!user) {
    const err = new Error(`User with id ${user_id} was not found`);
    err.status = 404;
    return next(err);
  }
  res.status(200).json(user);
};

const createUser = (req, res) => {
  const id = users.length + 1;
  const { name, email, password } = req.body;
  const newUser = {
    id: id,
    name: name,
    email: email,
    password: password,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  const existingUser = users.findIndex((user) => user.id === user_id);
  if (existingUser === -1) {
    const err = new Error(`User with id ${user_id} not found!`);
    err.status = 404;
    return next(err);
  }
  const { name, email, password } = req.body;

  users[existingUser] = {
    ...users[existingUser],
    name,
    email,
    password,
  };
  return res.status(200).json(users[existingUser]);
};

const deleteUser = (req, res, next) => {
  const user_id = parseInt(req.params.id);
  const user_index = users.findIndex((user) => user.id === user_id);
  if (user_index === -1) {
    const err = new Error(`User with id ${user_id} not found!`);
    err.status = 404;
    return next(err);
  }
  users.splice(user_index, 1);
  return res.status(204).end();
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
