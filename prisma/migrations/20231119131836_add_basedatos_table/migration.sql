/*
  Warnings:

  - Added the required column `idBaseDatos` to the `hdTicketDet` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hdTicketDet] ADD [idBaseDatos] INT NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[hdBaseDatos] (
    [idBaseDatos] INT NOT NULL IDENTITY(1,1),
    [nomBaseDatos] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdBaseDatos_pkey] PRIMARY KEY CLUSTERED ([idBaseDatos]),
    CONSTRAINT [hdBaseDatos_nomBaseDatos_key] UNIQUE NONCLUSTERED ([nomBaseDatos])
);

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idBaseDatos_fkey] FOREIGN KEY ([idBaseDatos]) REFERENCES [dbo].[hdBaseDatos]([idBaseDatos]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
