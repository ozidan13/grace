import express from "express";

import { login, register } from "../Controllers/authControllers.js";

const router = express.Router();
/*
 * @desc register user
 * @route POST /auth/register
 * @access public
 */
router.post("/auth/register", register);
/*
 * @desc login user
 * @route POST /auth/login
 * @access public
 */
router.post("/auth/login", login);

export default router;
