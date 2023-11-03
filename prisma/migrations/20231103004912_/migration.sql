/*
  Warnings:

  - Added the required column `idRol` to the `hdUsuario` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[hdTicket] DROP CONSTRAINT [hdTicket_idUsuarioRegistra_fkey];

-- AlterTable
ALTER TABLE [dbo].[hdUsuario] ADD [idRol] INT NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[hdRol] (
    [idRol] INT NOT NULL IDENTITY(1,1),
    [nomRol] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdRol_pkey] PRIMARY KEY CLUSTERED ([idRol]),
    CONSTRAINT [hdRol_nomRol_key] UNIQUE NONCLUSTERED ([nomRol])
);

-- CreateTable
CREATE TABLE [dbo].[hdActividad] (
    [idActividad] INT NOT NULL IDENTITY(1,1),
    [nomActividad] NVARCHAR(1000) NOT NULL,
    [desActividad] NVARCHAR(1000) NOT NULL,
    [idTicket] INT NOT NULL,
    [idUsuario] INT NOT NULL,
    CONSTRAINT [hdActividad_pkey] PRIMARY KEY CLUSTERED ([idActividad]),
    CONSTRAINT [hdActividad_nomActividad_key] UNIQUE NONCLUSTERED ([nomActividad])
);

-- CreateTable
CREATE TABLE [dbo].[hdProducto] (
    [idProducto] INT NOT NULL IDENTITY(1,1),
    [nomProducto] NVARCHAR(1000) NOT NULL,
    [desProducto] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdProducto_pkey] PRIMARY KEY CLUSTERED ([idProducto]),
    CONSTRAINT [hdProducto_nomProducto_key] UNIQUE NONCLUSTERED ([nomProducto])
);

-- CreateTable
CREATE TABLE [dbo].[hdModulo] (
    [idModulo] INT NOT NULL IDENTITY(1,1),
    [nomModulo] NVARCHAR(1000) NOT NULL,
    [desModulo] NVARCHAR(1000) NOT NULL,
    [idProducto] INT NOT NULL,
    CONSTRAINT [hdModulo_pkey] PRIMARY KEY CLUSTERED ([idModulo]),
    CONSTRAINT [hdModulo_nomModulo_key] UNIQUE NONCLUSTERED ([nomModulo])
);

-- CreateTable
CREATE TABLE [dbo].[hdFuncionalidad] (
    [idFuncionalidad] INT NOT NULL IDENTITY(1,1),
    [nomFuncionalidad] NVARCHAR(1000) NOT NULL,
    [desFuncionalidad] NVARCHAR(1000) NOT NULL,
    [idModulo] INT NOT NULL,
    CONSTRAINT [hdFuncionalidad_pkey] PRIMARY KEY CLUSTERED ([idFuncionalidad]),
    CONSTRAINT [hdFuncionalidad_nomFuncionalidad_key] UNIQUE NONCLUSTERED ([nomFuncionalidad])
);

-- CreateTable
CREATE TABLE [dbo].[hdLista] (
    [idLista] INT NOT NULL IDENTITY(1,1),
    [nomLista] NVARCHAR(1000) NOT NULL,
    [desLista] NVARCHAR(1000) NOT NULL,
    [idTipoLista] INT NOT NULL,
    CONSTRAINT [hdLista_pkey] PRIMARY KEY CLUSTERED ([idLista]),
    CONSTRAINT [hdLista_nomLista_key] UNIQUE NONCLUSTERED ([nomLista])
);

-- CreateTable
CREATE TABLE [dbo].[hdTipoLista] (
    [idTipoLista] INT NOT NULL IDENTITY(1,1),
    [nomTipoLista] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdTipoLista_pkey] PRIMARY KEY CLUSTERED ([idTipoLista]),
    CONSTRAINT [hdTipoLista_nomTipoLista_key] UNIQUE NONCLUSTERED ([nomTipoLista])
);

-- CreateTable
CREATE TABLE [dbo].[hdTipoServicio] (
    [idTipoServicio] INT NOT NULL IDENTITY(1,1),
    [codServicio] NVARCHAR(1000) NOT NULL,
    [nomTipoServicio] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hdTipoServicio_pkey] PRIMARY KEY CLUSTERED ([idTipoServicio]),
    CONSTRAINT [hdTipoServicio_codServicio_key] UNIQUE NONCLUSTERED ([codServicio]),
    CONSTRAINT [hdTipoServicio_nomTipoServicio_key] UNIQUE NONCLUSTERED ([nomTipoServicio])
);

-- CreateTable
CREATE TABLE [dbo].[hdTicketDet] (
    [idTicketDet] INT NOT NULL IDENTITY(1,1),
    [idProducto] INT NOT NULL,
    [idModulo] INT NOT NULL,
    [idFuncionalidad] INT NOT NULL,
    [version] NVARCHAR(1000) NOT NULL,
    [idSeveridadLista] INT NOT NULL,
    [idContinuidadLista] INT NOT NULL,
    [indReincidente] BIT NOT NULL,
    [equiposDet] NVARCHAR(1000) NOT NULL,
    [capaciDes] NVARCHAR(1000) NOT NULL,
    [capaciFec] DATETIME2 NOT NULL,
    [capaciLug] NVARCHAR(1000) NOT NULL,
    [dbTabla] NVARCHAR(1000) NOT NULL,
    [dbCampos] NVARCHAR(1000) NOT NULL,
    [idJustificacionLista] INT NOT NULL,
    [dbCual] NVARCHAR(1000) NOT NULL,
    [dbIndAut] BIT NOT NULL,
    [dbObser] NVARCHAR(1000) NOT NULL,
    [servNumDoc] NVARCHAR(1000) NOT NULL,
    [servNomUsu] NVARCHAR(1000) NOT NULL,
    [idCargo] INT NOT NULL,
    [idArea] INT NOT NULL,
    [hardEquipo] NVARCHAR(1000) NOT NULL,
    [idSoftClasiLista] INT NOT NULL,
    [softPantalla] NVARCHAR(1000) NOT NULL,
    [softReporte] NVARCHAR(1000) NOT NULL,
    [softVersProg] NVARCHAR(1000) NOT NULL,
    [softEquipo] NVARCHAR(1000) NOT NULL,
    [softUsuarios] NVARCHAR(1000) NOT NULL,
    [softIndTodEqui] BIT NOT NULL,
    [softIndTodUsu] BIT NOT NULL,
    [idTipoSol] INT NOT NULL,
    [indHabilitado] BIT NOT NULL,
    [fecRegistro] DATETIME2 NOT NULL,
    [fecModificacion] DATETIME2 NOT NULL,
    [idTicket] INT NOT NULL,
    [idUsuario] INT NOT NULL,
    CONSTRAINT [hdTicketDet_pkey] PRIMARY KEY CLUSTERED ([idTicketDet])
);

-- CreateTable
CREATE TABLE [dbo].[_hdTicketDetTohdTipoServicio] (
    [A] INT NOT NULL,
    [B] INT NOT NULL,
    CONSTRAINT [_hdTicketDetTohdTipoServicio_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_hdTicketDetTohdTipoServicio_B_index] ON [dbo].[_hdTicketDetTohdTipoServicio]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[hdUsuario] ADD CONSTRAINT [hdUsuario_idRol_fkey] FOREIGN KEY ([idRol]) REFERENCES [dbo].[hdRol]([idRol]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicket] ADD CONSTRAINT [hdTicket_idUsuarioRegistra_fkey] FOREIGN KEY ([idUsuarioRegistra]) REFERENCES [dbo].[hdUsuario]([idUsuario]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdActividad] ADD CONSTRAINT [hdActividad_idTicket_fkey] FOREIGN KEY ([idTicket]) REFERENCES [dbo].[hdTicket]([idTicket]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdActividad] ADD CONSTRAINT [hdActividad_idUsuario_fkey] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[hdUsuario]([idUsuario]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[hdModulo] ADD CONSTRAINT [hdModulo_idProducto_fkey] FOREIGN KEY ([idProducto]) REFERENCES [dbo].[hdProducto]([idProducto]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdFuncionalidad] ADD CONSTRAINT [hdFuncionalidad_idModulo_fkey] FOREIGN KEY ([idModulo]) REFERENCES [dbo].[hdModulo]([idModulo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdLista] ADD CONSTRAINT [hdLista_idTipoLista_fkey] FOREIGN KEY ([idTipoLista]) REFERENCES [dbo].[hdTipoLista]([idTipoLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idProducto_fkey] FOREIGN KEY ([idProducto]) REFERENCES [dbo].[hdProducto]([idProducto]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idModulo_fkey] FOREIGN KEY ([idModulo]) REFERENCES [dbo].[hdModulo]([idModulo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idFuncionalidad_fkey] FOREIGN KEY ([idFuncionalidad]) REFERENCES [dbo].[hdFuncionalidad]([idFuncionalidad]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idSeveridadLista_fkey] FOREIGN KEY ([idSeveridadLista]) REFERENCES [dbo].[hdLista]([idLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idContinuidadLista_fkey] FOREIGN KEY ([idContinuidadLista]) REFERENCES [dbo].[hdLista]([idLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idJustificacionLista_fkey] FOREIGN KEY ([idJustificacionLista]) REFERENCES [dbo].[hdLista]([idLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idCargo_fkey] FOREIGN KEY ([idCargo]) REFERENCES [dbo].[hdCargo]([idCargo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idArea_fkey] FOREIGN KEY ([idArea]) REFERENCES [dbo].[hdArea]([idArea]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idSoftClasiLista_fkey] FOREIGN KEY ([idSoftClasiLista]) REFERENCES [dbo].[hdLista]([idLista]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idTipoSol_fkey] FOREIGN KEY ([idTipoSol]) REFERENCES [dbo].[hdTipoSol]([idTipoSol]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idUsuario_fkey] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[hdUsuario]([idUsuario]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[hdTicketDet] ADD CONSTRAINT [hdTicketDet_idTicket_fkey] FOREIGN KEY ([idTicket]) REFERENCES [dbo].[hdTicket]([idTicket]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[_hdTicketDetTohdTipoServicio] ADD CONSTRAINT [_hdTicketDetTohdTipoServicio_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[hdTicketDet]([idTicketDet]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_hdTicketDetTohdTipoServicio] ADD CONSTRAINT [_hdTicketDetTohdTipoServicio_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[hdTipoServicio]([idTipoServicio]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
