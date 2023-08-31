/*
  Warnings:

  - Made the column `independeceDay` on table `country` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `country` MODIFY `independeceDay` INTEGER NOT NULL;
