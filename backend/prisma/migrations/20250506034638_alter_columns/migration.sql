/*
  Warnings:

  - You are about to drop the column `quantidadeEstoque` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `estoque` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "quantidadeEstoque",
ADD COLUMN     "estoque" INTEGER NOT NULL,
ALTER COLUMN "unidadeMedida" SET DEFAULT 'DUZIA';
