import { Router } from "express";
import {
  getUsers,
  getUser,
  registerUser,
  updateUserDetails,
  deleteUser
} from "../controllers/users.controllers.js";
import authenticate from "../middlewares/auth.middlewares.js";
const router = Router();

// Public
router.post("/", registerUser);
router.get("/:username", getUser);
router.get("/", getUsers);

// Protected
router.put("/", authenticate, updateUserDetails);
router.delete("/", authenticate, deleteUser);

export default router;

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N2NjYjk0ZDkyZWQ5MzYxZjQ2OGFmMyIsInVzZXJuYW1lIjoidmFpZGVoaSIsImlhdCI6MTc2OTc4NjQyNiwiZXhwIjoxNzY5Nzg3MzI2fQ.7SedYiVwABJzGxbIm95rRsMiGj0nxPwbZ9uYhl50PO0"
