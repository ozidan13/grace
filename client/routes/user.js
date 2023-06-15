import { Router } from "express";
import { verifyToken, verifyAdmin } from "../middlewares/verifyToken.js";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../Controllers/userControllers.js";
const router = Router();
/*
 * @desc get all users
 * @route GET /users
 * @access private
 */
router.get("/users", verifyAdmin, getAllUsers);
/*
 * @desc get  user by id
 * @route GET /users/:id
 * @access private
 */
router.get("/users/:id", verifyToken, getUserById);
/*
/*
 * @desc update user
 * @route PUT /users/update/:id
 * @access private
 */
router.put("/users/:id", verifyToken, updateUserById);
/*
 * @desc delete user
 * @route Delete /users/:id
 * @access private
 */
router.delete("/users/:id", verifyToken, deleteUserById);

export default router;
