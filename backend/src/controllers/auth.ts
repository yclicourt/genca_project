import { Request, Response } from "express";
import { registerEmployee, loginEmployee } from "../services/auth";

const registerCtrlEmployee = async ({ body }: Request, res: Response) => {
  const responseEmployee = await registerEmployee(body);
  res.send(responseEmployee);
};

const loginCtrlEmployee = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseEmployee = await loginEmployee({ email, password });
  responseEmployee === "The password entered is incorrect"
    ? res.status(403).json({ message: "You must correct your password" })
    : res.send(responseEmployee);
};

export { registerCtrlEmployee, loginCtrlEmployee };
