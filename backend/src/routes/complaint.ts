import express from "express";
import {
  createComplaintItem,
  deleteComplaintItem,
  getComplaintByClientItem,
  getComplaintItem,
  getComplaintItems,
  updateComplaintItem,
} from "../controllers/complaint";
const router = express.Router();

router.get("/", getComplaintItems);
router.get("/:id", getComplaintItem);
router.get("/:id/client/", getComplaintByClientItem);
router.post("/", createComplaintItem);
router.put("/:id", updateComplaintItem);
router.delete("/:id", deleteComplaintItem);

export { router };
