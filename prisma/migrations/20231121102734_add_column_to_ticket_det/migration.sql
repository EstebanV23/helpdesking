BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idBaseDatos] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ADD [idHardClasiLista] INT;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idHardClasiLista_fkey] FOREIGN KEY ([idHardClasiLista]) REFERENCES [dbo].[hdLista]([idLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
