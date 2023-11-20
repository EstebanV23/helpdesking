/*
  Warnings:

  - You are about to drop the column `nomActividad` on the `hdActividad` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[hdActividad] DROP CONSTRAINT [hdActividad_nomActividad_key];

-- DropIndex
ALTER TABLE [dbo].[hdSubTipoSol] DROP CONSTRAINT [hdSubTipoSol_nomSubTipoSol_key];

-- DropIndex
ALTER TABLE [dbo].[hdTipoSol] DROP CONSTRAINT [hdTipoSol_nomTipoSol_key];

-- AlterTable
ALTER TABLE [dbo].[hdActividad] DROP COLUMN [nomActividad];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
