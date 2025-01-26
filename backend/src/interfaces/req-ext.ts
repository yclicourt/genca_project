import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request {
  employee?: JwtPayload | { id: number };
}
