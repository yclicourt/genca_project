import express from "express";
import {
  validatorRegisterEmployee,
  validatorGetEmployee,
} from "../validators/employee";
import {
  createEmployeeItem,
  deleteEmployeeItem,
  getEmployeeItem,
  getEmployeeItems,
  updateEmployeeItem,
} from "../controllers/employee";
const router = express.Router();

router.get("/", validatorGetEmployee,getEmployeeItems);
router.get("/:id", validatorGetEmployee, getEmployeeItem);
router.post("/", validatorRegisterEmployee, createEmployeeItem);
router.put(
  "/:id",
  validatorGetEmployee,
  validatorRegisterEmployee,
  updateEmployeeItem
);
router.delete("/:id", validatorGetEmployee, deleteEmployeeItem);

export { router };
