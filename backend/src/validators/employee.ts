import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

import { NextFunction, Request, Response } from "express";


export const validatorGetEmployee = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];


export const validatorRegisterEmployee = [
  check("name").exists().notEmpty().isString().withMessage("The lastname most be a string"),
  check("lastname").exists().notEmpty().isString().withMessage("The lastname most be a string"),
  check("genre").exists().notEmpty().optional().isIn(["female", "male"]),
  check("category")
    .exists()
    .notEmpty()
    .optional()
    .isIn(["directive", "employee"]),
  check("email")
    .exists()
    .notEmpty()
    .isEmail({ allow_utf8_local_part: true, allow_display_name: true }).withMessage("The email is required"),
  check("password").exists().notEmpty().isLength({ min: 3, max: 20 }).withMessage("The password field cannot be empty "),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorLoginEmployee = [
  check("email").exists().notEmpty().isEmail({ allow_utf8_local_part: true, allow_display_name: true }).withMessage("The email is required"),
  check("password").exists().notEmpty().isLength({ min: 3, max: 20 }).withMessage("The password field cannot be empty "),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];