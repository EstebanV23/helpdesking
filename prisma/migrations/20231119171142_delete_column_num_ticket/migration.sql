/*
  Warnings:

  - You are about to drop the column `numTicket` on the `hdTicket` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[hdTicket] DROP CONSTRAINT [hdTicket_idSubTipoSol_fkey];

-- DropIndex
ALTER TABLE [dbo].[hdTicket] DROP CONSTRAINT [hdTicket_numTicket_key];

-- AlterTable
ALTER TABLE [dbo].[hdTicket] ALTER COLUMN [fechaCierre] DATETIME2 NULL;
ALTER TABLE [dbo].[hdTicket] ALTER COLUMN [indCierre] BIT NULL;
ALTER TABLE [dbo].[hdTicket] ALTER COLUMN [numAgilo] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicket] ALTER COLUMN [idSubTipoSol] INT NULL;
ALTER TABLE [dbo].[hdTicket] DROP COLUMN [numTicket];
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_indCierre_df] DEFAULT 0 FOR [indCierre];

-- AddForeignKey
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_idSubTipoSol_fkey] FOREIGN KEY ([idSubTipoSol]) REFERENCES [dbo].[hdSubTipoSol]([idSubTipoSol]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
