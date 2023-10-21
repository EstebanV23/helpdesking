/*
  Warnings:

  - A unique constraint covering the columns `[emailUsuario]` on the table `hdUsuario` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[hdUsuario] ADD CONSTRAINT [hdUsuario_emailUsuario_key] UNIQUE NONCLUSTERED ([emailUsuario]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
