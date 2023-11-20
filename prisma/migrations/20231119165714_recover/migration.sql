/*
  Warnings:

  - You are about to alter the column `numTicket` on the `hdTicket` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[hdTicket] DROP CONSTRAINT [hdTicket_numTicket_key];

-- AlterTable
ALTER TABLE [dbo].[hdTicket] ALTER COLUMN [numTicket] INT NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_numTicket_key] UNIQUE NONCLUSTERED ([numTicket]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
