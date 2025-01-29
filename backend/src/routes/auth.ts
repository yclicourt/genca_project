import { Router } from "express";

import { loginCtrlEmployee, registerCtrlEmployee } from "../controllers/auth";
import {
  validatorLoginEmployee,
  validatorRegisterEmployee,
} from "../validators/employee";
const router = Router();

router.post("/register",validatorRegisterEmployee, registerCtrlEmployee);
router.post("/login", validatorLoginEmployee, loginCtrlEmployee);

export { router };
