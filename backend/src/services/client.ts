import { Client } from "../interfaces/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getClient = async (id: number) => {
  const responseClient = await prisma.client.findFirst({
    where: {
      id: Number(id),
    },
  });
  return responseClient;
};

const getClients = async () => {
  const responseClients = await prisma.client.findMany({});
  return responseClients;
};

const createClient = async (item: Client) => {
  const responseInsert = await prisma.client.create({
    data: {
      client_name: item.client_name,
      address: item.address,
      client_ci: item.client_ci,
      frecuency: item.frecuency,
      ocupation: item.ocupation,
      client_genre: "FEMALE",
      order: item.order,
    },
  });
  return responseInsert;
};

const updateClient = async (id: number, data: Client) => {
  const responseUpdated = await prisma.client.update({
    where: {
      id: Number(id),
    },

    data: {
      client_name: data.client_name,
      address: data.address,
      client_ci: data.client_ci,
      frecuency: data.frecuency,
      ocupation: data.ocupation,
      client_genre: "FEMALE",
      order: data.order,
    },
  });
  return responseUpdated;
};

const deleteClient = async (id: number) => {
  await prisma.client.delete({
    where: {
      id,
    },
  });
};

export { getClient, getClients, createClient, updateClient, deleteClient };
