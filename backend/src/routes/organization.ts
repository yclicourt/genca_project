import express from "express";
import {
  createOrganizationItem,
  deleteOrganizationItem,
  getOrganizationItem,
  getOrganizationItems,
  updateOrganizationItem,
} from "../controllers/organization";
import { validatorCreateOrganization, validatorGetOrganization } from "../validators/organization";

const router = express.Router();

router.get("/", getOrganizationItems);
router.get("/:id",validatorGetOrganization,getOrganizationItem);
router.post("/", validatorCreateOrganization,createOrganizationItem);
router.put("/:id", validatorGetOrganization,updateOrganizationItem);
router.delete("/:id", validatorGetOrganization,deleteOrganizationItem);

export { router };
