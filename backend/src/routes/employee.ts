import express from "express";
import {
  validatorCreateEmployee,
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

router.get("/", getEmployeeItems);
router.get("/:id", validatorGetEmployee, getEmployeeItem);
router.post("/", createEmployeeItem);
router.put(
  "/:id",
  validatorGetEmployee,
  validatorCreateEmployee,
  updateEmployeeItem
);
router.delete("/:id", validatorGetEmployee, deleteEmployeeItem);

export { router };
