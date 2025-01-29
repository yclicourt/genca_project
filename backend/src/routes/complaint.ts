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

router.get("/", getComplaintItems);
router.get("/:id",validatorGetComplaint, getComplaintItem);
router.get("/:id/client/", getComplaintByClientItem);
router.post("/",validatorCreateComplaint, createComplaintItem);
router.put("/:id",validatorGetComplaint, updateComplaintItem);
router.delete("/:id",validatorGetComplaint, deleteComplaintItem);

export { router };
