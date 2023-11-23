/*
  Warnings:

  - You are about to alter the column `solicitud` on the `hdTicket` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `NVarChar(500)`.
  - You are about to alter the column `capaciDes` on the `hdTicketDet` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `NVarChar(200)`.
  - You are about to alter the column `nomUsuario` on the `hdUsuario` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `NVarChar(60)`.
  - You are about to alter the column `emailUsuario` on the `hdUsuario` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `NVarChar(100)`.
  - You are about to alter the column `numDocumento` on the `hdUsuario` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `NVarChar(12)`.
  - You are about to alter the column `numTelefono` on the `hdUsuario` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `NVarChar(15)`.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[hdUsuario] DROP CONSTRAINT [hdUsuario_emailUsuario_key];

-- DropIndex
ALTER TABLE [dbo].[hdUsuario] DROP CONSTRAINT [hdUsuario_numDocumento_key];

-- AlterTable
ALTER TABLE [dbo].[hdActividad] ALTER COLUMN [desActividad] NTEXT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[hdTicket] ALTER COLUMN [solicitud] NVARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [capaciDes] NVARCHAR(200) NULL;

-- AlterTable
ALTER TABLE [dbo].[hdUsuario] ALTER COLUMN [nomUsuario] NVARCHAR(60) NOT NULL;
ALTER TABLE [dbo].[hdUsuario] ALTER COLUMN [emailUsuario] NVARCHAR(100) NOT NULL;
ALTER TABLE [dbo].[hdUsuario] ALTER COLUMN [numDocumento] NVARCHAR(12) NOT NULL;
ALTER TABLE [dbo].[hdUsuario] ALTER COLUMN [numTelefono] NVARCHAR(15) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[hdUsuario] ADD CONSTRAINT [hdUsuario_emailUsuario_key] UNIQUE NONCLUSTERED ([emailUsuario]);

-- CreateIndex
ALTER TABLE [dbo].[hdUsuario] ADD CONSTRAINT [hdUsuario_numDocumento_key] UNIQUE NONCLUSTERED ([numDocumento]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
