BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hdTicketDet] ADD [idFrecuenciaLista] INT;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idFrecuenciaLista_fkey] FOREIGN KEY ([idFrecuenciaLista]) REFERENCES [dbo].[hdLista]([idLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
