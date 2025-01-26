import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByEmployee = req.headers.authorization || " ";
    const jwt = jwtByEmployee.split(" ").pop();
    const isEmployee = verifyToken(`${jwt}`) as { id: string };
    if (!isEmployee) {
      res.status(401);
      res.send("You do not have a valid session");
    } else {
      req.employee = isEmployee;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("Invalid session");
  }
};

export { checkJWT };