BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idProducto] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idModulo] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idFuncionalidad] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [version] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idSeveridadLista] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idContinuidadLista] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [indReincidente] BIT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [equiposDet] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [capaciDes] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [capaciFec] DATETIME2 NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [capaciLug] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [dbTabla] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [dbCampos] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idJustificacionLista] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [dbCual] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [dbIndAut] BIT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [dbObser] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [servNumDoc] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [servNomUsu] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idCargo] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idArea] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [hardEquipo] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idSoftClasiLista] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softPantalla] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softReporte] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softVersProg] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softEquipo] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softUsuarios] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softIndTodEqui] BIT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [softIndTodUsu] BIT NULL;
ALTER TABLE [dbo].[hdTicketDet] ALTER COLUMN [idTipoSol] INT NULL;
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_indHabilitado_df] DEFAULT 1 FOR [indHabilitado];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
