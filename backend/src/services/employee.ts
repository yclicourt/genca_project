import { Employee } from "../interfaces/employee";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEmployee = async (id: number) => {
  const responseEmployee = await prisma.employee.findFirst({
    where: {
      id: Number(id),
    },
  });
  return responseEmployee;
};

const getEmployees = async () => {
  const responseEmployees = await prisma.employee.findMany({});
  return responseEmployees;
};

const createEmployee = async (item: Employee) => {
  const responseInsert = await prisma.employee.create({
    data: {
      email: item.email,
      lastname: item.lastname,
      name: item.name,
      password: item.password,
      category: "DIRECTIVE",
      role: "USER",
    },
  });
  return responseInsert;
};

const updateEmployee = async (id: number, data: Employee) => {
  const responseUpdated = await prisma.employee.update({
    where: {
      id: Number(id),
    },

    data: {
      email: data.email,
      lastname: data.lastname,
      name: data.name,
      password: data.password,
      category: "DIRECTIVE",
      role: "USER",
    },
  });
  return responseUpdated;
};

const deleteEmployee = async (id: number) => {
  await prisma.employee.delete({
    where: {
      id,
    },
  });
};

export {
  getEmployee,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
