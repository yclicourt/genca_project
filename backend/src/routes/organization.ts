import express from "express";
import {
  createOrganizationItem,
  deleteOrganizationItem,
  getOrganizationItem,
  getOrganizationItems,
  updateOrganizationItem,
} from "../controllers/organization";

const router = express.Router();

router.get("/", getOrganizationItems);
router.get("/:id", getOrganizationItem);
router.post("/", createOrganizationItem);
router.put("/:id", updateOrganizationItem);
router.delete("/:id", deleteOrganizationItem);

export { router };
