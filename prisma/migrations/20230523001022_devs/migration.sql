/*
  Warnings:

  - You are about to drop the `cli` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `cli`;

-- CreateTable
CREATE TABLE `cliente` (
    `cpf` INTEGER NOT NULL AUTO_INCREMENT,
    `cargo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
