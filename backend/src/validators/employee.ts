import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

import { NextFunction, Request, Response } from "express";

export const validatorCreateEmployee = [
  check("name").exists().notEmpty().isString(),
  check("lastname").exists().notEmpty().isString(),
  check("ocupation").exists().notEmpty().isString(),
  check("genre").exists().notEmpty().optional().isIn(["female", "male"]),
  check("category")
    .exists()
    .notEmpty()
    .optional()
    .isIn(["directive", "employee"]),
  check("email")
    .exists()
    .notEmpty()
    .isEmail({ allow_utf8_local_part: true, allow_display_name: true }),
  check("password").exists().notEmpty().isLength({ min: 3, max: 12 }),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorGetEmployee = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
