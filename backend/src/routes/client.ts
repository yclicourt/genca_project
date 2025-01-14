import express from "express";

import {
  validatorCreateClient,
  validatorGetClient,
} from "../validators/client";
import {
  createClientItem,
  deleteClientItem,
  getClientItem,
  getClientItems,
  updateClientItem,
} from "../controllers/client";
const router = express.Router();

router.get("/", getClientItems);
router.get("/:id", validatorGetClient, getClientItem);
router.post("/", validatorCreateClient, createClientItem);
router.put("/:id", validatorCreateClient, validatorGetClient, updateClientItem);
router.delete("/:id", validatorGetClient, deleteClientItem);

export { router };
