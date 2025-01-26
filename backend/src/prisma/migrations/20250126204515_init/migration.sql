-- CreateEnum
CREATE TYPE "Level" AS ENUM ('MUNICIPALITY', 'PROVINCE', 'NATION');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('DIRECTIVE', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "client_ci" DOUBLE PRECISION NOT NULL,
    "frecuency" BOOLEAN NOT NULL DEFAULT false,
    "ocupation" TEXT NOT NULL,
    "client_genre" "Genre" NOT NULL DEFAULT 'FEMALE',
    "order" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'DIRECTIVE',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "date_file" TIMESTAMP(3) NOT NULL,
    "description_incident" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "level" "Level" NOT NULL DEFAULT 'MUNICIPALITY',
    "denomination" TEXT NOT NULL,
    "categoryEmployeeId" INTEGER NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_categoryEmployeeId_fkey" FOREIGN KEY ("categoryEmployeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
