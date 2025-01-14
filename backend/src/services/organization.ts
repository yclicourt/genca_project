import { Organization } from "../interfaces/organization";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getOrganization = async (id: number) => {
  const responseOrganization = await prisma.organization.findFirst({
    where: {
      id: Number(id),
    },
  });
  return responseOrganization;
};

const getOrganizations = async () => {
  const responseOrganizations = await prisma.organization.findMany({});
  return responseOrganizations;
};

const createOrganization = async (item: Organization) => {
  const responseInsert = await prisma.organization.create({
    data: {
      address: item.address,
      categoryEmployeeId: Number(item.categoryEmployeeId),
      denomination: item.denomination,
    },
  });
  return responseInsert;
};

const updateOrganization = async (id: number, data: Organization) => {
  const responseUpdated = await prisma.organization.update({
    where: {
      id: Number(id),
    },

    data: {
      address: data.address,
      categoryEmployeeId: Number(data.categoryEmployeeId),
      denomination: data.denomination,
    },
  });
  return responseUpdated;
};

const deleteOrganization = async (id: number) => {
  await prisma.organization.delete({
    where: {
      id,
    },
  });
};

export {
  getOrganization,
  getOrganizations,
  createOrganization,
  updateOrganization,
  deleteOrganization,
};
