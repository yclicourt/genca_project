import { File } from "../interfaces/file";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const uploadFile = async ({ path, filename }: File) => {
  const responseItem = await prisma.file.create({
    data: {
      path,
      filename,
    },
  });
  return responseItem;
};

export { uploadFile };
