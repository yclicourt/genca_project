import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

import { NextFunction, Request, Response } from "express";

export const validatorCreateOrganization = [
  check("address").exists().notEmpty().isString(),
  check("denomination").exists().notEmpty().isString(),
  check("categoryEmployeeId").exists().isNumeric(),
  check("genre").exists().notEmpty().optional().isIn(["female", "male"]),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorGetOrganization = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
