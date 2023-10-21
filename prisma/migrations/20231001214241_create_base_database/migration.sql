/*
  Warnings:

  - You are about to drop the `hd_user` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[hd_user];

-- CreateTable
CREATE TABLE [dbo].[hdUsuario] (
    [idUsuario] INT NOT NULL IDENTITY(1,1),
    [nomUsuario] NVARCHAR(1000) NOT NULL,
    [emailUsuario] NVARCHAR(1000) NOT NULL,
    [numDocumento] NVARCHAR(1000) NOT NULL,
    [numTelefono] NVARCHAR(1000) NOT NULL,
    [idTipoDocumento] INT NOT NULL,
    [idCargo] INT NOT NULL,
    CONSTRAINT [hdUsuario_pkey] PRIMARY KEY CLUSTERED ([idUsuario]),
    CONSTRAINT [hdUsuario_numDocumento_key] UNIQUE NONCLUSTERED ([numDocumento])
);

-- CreateTable
CREATE TABLE [dbo].[hdTipoDocumento] (
    [idTipoDocumento] INT NOT NULL IDENTITY(1,1),
    [nomTipoDocumento] NVARCHAR(1000) NOT NULL,
    [abrNom] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdTipoDocumento_pkey] PRIMARY KEY CLUSTERED ([idTipoDocumento]),
    CONSTRAINT [hdTipoDocumento_nomTipoDocumento_key] UNIQUE NONCLUSTERED ([nomTipoDocumento]),
    CONSTRAINT [hdTipoDocumento_abrNom_key] UNIQUE NONCLUSTERED ([abrNom])
);

-- CreateTable
CREATE TABLE [dbo].[hdCargo] (
    [idCargo] INT NOT NULL IDENTITY(1,1),
    [nomCargo] NVARCHAR(1000) NOT NULL,
    [idArea] INT NOT NULL,
    CONSTRAINT [hdCargo_pkey] PRIMARY KEY CLUSTERED ([idCargo]),
    CONSTRAINT [hdCargo_nomCargo_key] UNIQUE NONCLUSTERED ([nomCargo])
);

-- CreateTable
CREATE TABLE [dbo].[hdArea] (
    [idArea] INT NOT NULL IDENTITY(1,1),
    [nomArea] NVARCHAR(1000) NOT NULL,
    [idEmpresa] INT NOT NULL,
    CONSTRAINT [hdArea_pkey] PRIMARY KEY CLUSTERED ([idArea]),
    CONSTRAINT [hdArea_nomArea_key] UNIQUE NONCLUSTERED ([nomArea])
);

-- CreateTable
CREATE TABLE [dbo].[hdEmpresa] (
    [idEmpresa] INT NOT NULL IDENTITY(1,1),
    [nomEmpresa] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdEmpresa_pkey] PRIMARY KEY CLUSTERED ([idEmpresa]),
    CONSTRAINT [hdEmpresa_nomEmpresa_key] UNIQUE NONCLUSTERED ([nomEmpresa])
);

-- CreateTable
CREATE TABLE [dbo].[hdTicket] (
    [idTicket] INT NOT NULL IDENTITY(1,1),
    [numTicket] NVARCHAR(1000) NOT NULL,
    [solicitud] NVARCHAR(1000) NOT NULL,
    [fechaRegistro] DATETIME2 NOT NULL,
    [fechaCierre] DATETIME2 NOT NULL,
    [indCierre] BIT NOT NULL,
    [idUsuarioRegistra] INT NOT NULL,
    [numAgilo] NVARCHAR(1000) NOT NULL,
    [idTipoSol] INT NOT NULL,
    [idSubTipoSol] INT NOT NULL,
    CONSTRAINT [hdTicket_pkey] PRIMARY KEY CLUSTERED ([idTicket]),
    CONSTRAINT [hdTicket_numTicket_key] UNIQUE NONCLUSTERED ([numTicket])
);

-- CreateTable
CREATE TABLE [dbo].[hdTipoSol] (
    [idTipoSol] INT NOT NULL IDENTITY(1,1),
    [nomTipoSol] NVARCHAR(1000) NOT NULL,
    [abrNom] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdTipoSol_pkey] PRIMARY KEY CLUSTERED ([idTipoSol]),
    CONSTRAINT [hdTipoSol_nomTipoSol_key] UNIQUE NONCLUSTERED ([nomTipoSol]),
    CONSTRAINT [hdTipoSol_abrNom_key] UNIQUE NONCLUSTERED ([abrNom])
);

-- CreateTable
CREATE TABLE [dbo].[hdSubTipoSol] (
    [idSubTipoSol] INT NOT NULL IDENTITY(1,1),
    [nomSubTipoSol] NVARCHAR(1000) NOT NULL,
    [abrNom] NVARCHAR(1000) NOT NULL,
    [idTipoSol] INT NOT NULL,
    CONSTRAINT [hdSubTipoSol_pkey] PRIMARY KEY CLUSTERED ([idSubTipoSol]),
    CONSTRAINT [hdSubTipoSol_nomSubTipoSol_key] UNIQUE NONCLUSTERED ([nomSubTipoSol]),
    CONSTRAINT [hdSubTipoSol_abrNom_key] UNIQUE NONCLUSTERED ([abrNom])
);

-- AddForeignKey
ALTER TABLE [dbo].[hdUsuario] ADD CONSTRAINT [hdUsuario_idTipoDocumento_fkey] FOREIGN KEY ([idTipoDocumento]) REFERENCES [dbo].[hdTipoDocumento]([idTipoDocumento]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdUsuario] ADD CONSTRAINT [hdUsuario_idCargo_fkey] FOREIGN KEY ([idCargo]) REFERENCES [dbo].[hdCargo]([idCargo]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdCargo] ADD CONSTRAINT [hdCargo_idArea_fkey] FOREIGN KEY ([idArea]) REFERENCES [dbo].[hdArea]([idArea]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdArea] ADD CONSTRAINT [hdArea_idEmpresa_fkey] FOREIGN KEY ([idEmpresa]) REFERENCES [dbo].[hdEmpresa]([idEmpresa]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_idUsuarioRegistra_fkey] FOREIGN KEY ([idUsuarioRegistra]) REFERENCES [dbo].[hdUsuario]([idUsuario]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_idTipoSol_fkey] FOREIGN KEY ([idTipoSol]) REFERENCES [dbo].[hdTipoSol]([idTipoSol]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_idSubTipoSol_fkey] FOREIGN KEY ([idSubTipoSol]) REFERENCES [dbo].[hdSubTipoSol]([idSubTipoSol]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdSubTipoSol] ADD CONSTRAINT [hdSubTipoSol_idTipoSol_fkey] FOREIGN KEY ([idTipoSol]) REFERENCES [dbo].[hdTipoSol]([idTipoSol]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
