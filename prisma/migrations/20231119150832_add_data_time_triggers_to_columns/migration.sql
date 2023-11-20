BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hdActividad] ADD CONSTRAINT [hdActividad_fecRegistro_df] DEFAULT CURRENT_TIMESTAMP FOR [fecRegistro];

-- AlterTable
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_fechaRegistro_df] DEFAULT CURRENT_TIMESTAMP FOR [fechaRegistro];

-- AlterTable
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_fecRegistro_df] DEFAULT CURRENT_TIMESTAMP FOR [fecRegistro];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
