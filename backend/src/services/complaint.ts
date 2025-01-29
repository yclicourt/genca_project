import { PrismaClient } from "@prisma/client";
import { Complaint } from "../interfaces/complaint";

const prisma = new PrismaClient();

const getComplaint = async (id: number) => {
  const responseComplaint = await prisma.complaint.findFirst({
    where: {
      id,
    },
  });
  return responseComplaint;
};

const getComplaints = async () => {
  const responseComplaints = await prisma.complaint.findMany({});
  return responseComplaints;
};

const createComplaint = async (item: Complaint) => {
  const responseInsertComplaint = await prisma.complaint.create({
    data: {
      address: item.address,
      clientId: item.clientId,
      fileId: item.fileId,
      organizationId: item.organizationId,
      employeeId: item.employeeId,
      date: item.date,
    },
  });
  return responseInsertComplaint;
};

const updateComplaint = async (data: Complaint, id: number) => {
  const responseUpdated = await prisma.complaint.update({
    where: {
      id: Number(id),
    },
    data: {
      address: data.address,
      employeeId: data.employeeId,
      clientId: data.clientId,
      date: data.date,
      fileId: data.fileId,
      organizationId: data.organizationId,
    },
  });
  return responseUpdated;
};

const deleteComplaint = async (id: number) => {
  await prisma.complaint.delete({
    where: {
      id,
    },
  });
};

const getClientByComplaint = async (id: number) => {
  const responseComplaintItemClient = await prisma.complaint.findFirst({
    where: {
      clientId: id,
    },
  });
  return responseComplaintItemClient;
};

export {
  getComplaints,
  getComplaint,
  getClientByComplaint,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};
