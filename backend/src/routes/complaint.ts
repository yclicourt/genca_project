import express from "express";
import {
  createComplaintItem,
  deleteComplaintItem,
  getComplaintByClientItem,
  getComplaintItem,
  getComplaintItems,
  updateComplaintItem,
} from "../controllers/complaint";
import {
  validatorGetComplaint,
  validatorCreateComplaint,
} from "../validators/complaint";
const router = express.Router();

router.get("/", validatorGetComplaint, getComplaintItems);
router.get("/:id", validatorGetComplaint, getComplaintItem);
router.get("/:id/client/", validatorGetComplaint, getComplaintByClientItem);
router.post("/", validatorCreateComplaint, createComplaintItem);
router.put("/:id",validatorGetComplaint,validatorCreateComplaint, updateComplaintItem);
router.delete("/:id", validatorGetComplaint,deleteComplaintItem);

export { router };
