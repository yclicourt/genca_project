/*
  Warnings:

  - Added the required column `categoryEmployeeId` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `denomination` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "categoryEmployeeId" INTEGER NOT NULL,
ADD COLUMN     "denomination" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_categoryEmployeeId_fkey" FOREIGN KEY ("categoryEmployeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
