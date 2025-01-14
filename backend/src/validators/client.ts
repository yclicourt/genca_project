import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

import { NextFunction, Request, Response } from "express";

export const validatorCreateClient = [
  check("client_name").exists().notEmpty().isString(),
  check("address").exists().notEmpty().isString(),
  check("client_ci").exists().notEmpty().isString(),
  check("frecuency").exists().notEmpty().isBoolean(),
  check("ocupation").exists().notEmpty().isString(),
  check("client_genre").exists().notEmpty().optional().isIn(["female", "male"]),
  check("order").exists().notEmpty().isString(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorGetClient = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
