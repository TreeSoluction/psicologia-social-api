/*
  Warnings:

  - You are about to drop the column `cpf` on the `Psicologos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Psicologos" DROP COLUMN "cpf",
ALTER COLUMN "crp" DROP NOT NULL;
