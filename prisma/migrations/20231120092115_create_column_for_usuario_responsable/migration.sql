/*
  Warnings:

  - Added the required column `idUsuarioResponsable` to the `hdTicket` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hdTicket] ADD [idUsuarioResponsable] INT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_idUsuarioResponsable_fkey] FOREIGN KEY ([idUsuarioResponsable]) REFERENCES [dbo].[hdUsuario]([idUsuario]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
