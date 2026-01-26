import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();

// Get all users along with query limiting
router.get("/", getUsers);

// Get a single user
router.get("/:id", getUser);

// Create a new user
router.post("/", createUser);

// Update a new user
router.put("/:id", updateUser);

// Delete the user
router.delete("/:id", deleteUser);

export default router;
