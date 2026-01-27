import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";
const router = Router();

// Get all users
router.get("/", getUsers);

// Get user by id
router.get("/:id", getUser);

// Create a new user
router.post("/", createUser);

// Update user details
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);

export default router;
