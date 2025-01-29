import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

import { NextFunction, Request, Response } from "express";

export const validatorGetComplaint = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorCreateComplaint = [
  check("employeeId").exists().isNumeric(),
  check("fileId").exists().isNumeric(),
  check("clientId").exists().isNumeric(),
  check("date").exists().isISO8601().withMessage("Date must be in ISO8601 format (YYYY-MM-DD)"),
  check("address").exists().isString(),
  check("organizationId").exists().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
