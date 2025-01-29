import express from "express";
import multerMiddleware from "../middleware/file";
import { checkJWT } from "../middleware/session";
import { uploadItem } from "../controllers/file";

const router = express.Router();

router.post(
  "/",
  checkJWT,
  multerMiddleware.single("file_complaint"),
  uploadItem
);

export { router };
