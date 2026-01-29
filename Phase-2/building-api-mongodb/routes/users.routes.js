import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUserDetails,
  deleteUser
} from "../controllers/users.controllers.js";
const router = Router();

// Get all users
router.get("/", getUsers);

// Get username and hobbies by username
router.get("/:username", getUser);

// Create a new user
router.post("/", createUser);

// Update user details
router.put("/", updateUserDetails);

// Delete a user
router.delete("/", deleteUser);

export default router;
