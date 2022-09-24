import express from "express";
import {
  login,
  logout,
  myProfile,
  register,
  updateProfile,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/Auth.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/user").get(isAuth, myProfile);

router.route("/user/update").put(isAuth, updateProfile);

export default router;
