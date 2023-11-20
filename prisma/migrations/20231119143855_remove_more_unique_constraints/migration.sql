BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[hdLista] DROP CONSTRAINT [hdLista_nomLista_key];

-- DropIndex
ALTER TABLE [dbo].[hdTipoLista] DROP CONSTRAINT [hdTipoLista_nomTipoLista_key];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
