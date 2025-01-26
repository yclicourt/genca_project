import { Auth } from "../interfaces/auth";
import { Employee } from "../interfaces/employee";
import { PrismaClient } from "@prisma/client";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const prisma = new PrismaClient();

const registerEmployee = async ({ email, lastname, password, name }: Employee) => {
  const checkIs = await prisma.employee.findFirst({
    where: {
      email,
    },
  });
  if (checkIs) return "The employee already exists ";
  const passwordHash = await encrypt(password);
  const registerNewEmployee = await prisma.employee.create({
    data: {
      email,
      password: passwordHash,
      lastname,
      name,
    },
  });
  return registerNewEmployee;
};

const loginEmployee = async ({ email, password }: Auth) => {
  const checkIs = await prisma.employee.findFirst({
    where: {
      email,
    },
  });
  if (!checkIs) return "The employee does not exist";
  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "The password entered is incorrect";
  const token = generateToken(checkIs.email);
  const data = [token, checkIs];
  return data;
};

export { registerEmployee, loginEmployee };
