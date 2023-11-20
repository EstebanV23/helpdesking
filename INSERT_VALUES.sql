BEGIN TRAN
INSERT INTO hdTipoSol(nomTipoSol, abrNom) VALUES
	('Hardware', 'HD'),
	('Software', 'ST'),
	('Servicios', 'SV'),
	('Base de datos', 'BD'),
	('Capacitación', 'CP'),
	('Administración', 'AD')

	SELECT * FROM hdTipoSol

INSERT INTO hdSubTipoSol(idTipoSol, nomSubTipoSol, abrNom) VALUES
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Análisis de datos', 'ANDA'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Asesoria', 'ASEA'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Cubos', 'CUBO'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Documentación', 'DOCU'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Modificación - Ajuste', 'MODA'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Modificación - Mejora', 'MODM'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Modificación - Nuevo', 'MODN'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Nuevo', 'NUEV'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Reportes gerenciales', 'REGE'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Software'), 'Tableros', 'TABS'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Servicios'), 'Configuración', 'CONF'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Servicios'), 'Crear', 'CREA'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Servicios'), 'Eliminar', 'ELIM'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Servicios'), 'Falla', 'FALA'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Base de datos'), 'Backup/Restauración', 'BARE'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Base de datos'), 'Configuración', 'CONF'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Base de datos'), 'Nuevo', 'NUEV'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Administración de usuarios', 'ADMU'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Análisis', 'ANAS'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Asesorias', 'ASES'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Configuración', 'CONF'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Cubos', 'CUBS'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Inf. Periódico', 'INFP'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Software ajuste', 'SOFA'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Modificación mejora', 'SOFM'),
	((SELECT idTipoSol FROM hdTipoSol WHERE nomTipoSol = 'Administración'), 'Modificación nuevo', 'SOFN')

INSERT INTO hdTipoLista(nomTipoLista) VALUES 
	('Hardware clasificación'),
	('Severidad'),
	('Frecuencia'),
	('Selección multiple'),
	('Continuidad'),
	('Justificación base de datos'),
	('Genérico')

	SELECT * FROM hdTipoLista

INSERT INTO hdLista(idTipoLista, nomLista, desLista) VALUES
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Mantenimiento correctivo', 'Mantenimiento correctivo de partes físicas de computo o dispositivos externos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Soporte y/o configuración', 'Soporte de y/o configuración de dispositivos físicos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Infraestructura', 'Temas relacionados con infraestructura, en general'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Servicios', 'Servicio realizado con tema referente a hardware'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Cotizaciones/asesorías', 'Cotización o asesoria de hardware'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Mantenimiento preventivo', 'Mantenimietno realizado con anterioridad para la prevención de fallos o daños'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Hardware clasificación'), 'Soporte biomédico', 'Soporte a dispositivos biomédicos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Severidad'), 'Bajo', 'El impacto de la solicitud no es muy relevante pero debe corregirse o realizarse'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Severidad'), 'Medio', 'El impacto es un poco más importante pero no es prioritario'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Severidad'), 'Alto', 'El impacto puede afectar procesos si no se atiende a tiempo, y es necesario intervenir'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Severidad'), 'Crítico', 'El impacto está generando retrasos o fallos, y debe atenderse urgentemente'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Frecuencia'), 'No aplica', 'La frecuencia no aplica en el caso solicitado'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Frecuencia'), 'Algunas veces', 'Es poco común que ocurra, pero en algunos equipos se presenta'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Frecuencia'), 'Frecuentemente', 'Sucede en la mayoría de equipos y es bastante común observar dicho reporte'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Frecuencia'), 'Siempre', 'Siempre sucede en cualquier equipo, es confirmado que siempre sucede'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Selección multiple'), 'No', 'Respuesta para un no rotundo'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Selección multiple'), 'No aplica', 'No aplica esta selección'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Selección multiple'), 'Si', 'Respuesta para un si rotundo'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Continuidad'), 'No aplica', 'No aplica esta selección'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Análisis', 'Analisis de bases de datos o queries'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Cambio de estructura DDL', 'Cambio en la estructura de la base de datos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Configuración inicial', 'Realización de configuraciones iniciales para un aplicativo'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Configuración masiva', 'Es necesario realizar configuraciones masivas en la base de datos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Depuración de datos', 'Es necesario depurar datos de la base de datos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Error de usuario', 'Hay que realizar correcciones por errores de usuario'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Error de sistema', 'Se deben realizar correciones por errores del sistema'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'No aplica', 'No aplica esta selección'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'No existe opción en el software', 'No puede realizar dicha acción en el software'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Justificación base de datos'), 'Otro', 'Otra razón de interveción de base de datos'),
	((SELECT idTipoLista FROM hdTipoLista WHERE nomTipoLista = 'Genérico'), 'No aplica', 'Opción la cual no aplica')

SET IDENTITY_INSERT hdBaseDatos OFF
INSERT INTO hdBaseDatos(nomBaseDatos, desBaseDatos) VALUES
	('FCVIDC',	'Instituto del corazon'),
	('FCV',	'Base de datos de contabilidad, ADP (principal)'),
	('FCVPH',	'Productos Hospitalarios'),
	('FCVCENTER',	'Contac Center'),
	('UTA',	'Unidad de Transporte Aereo'),
	('HD',	'HELP DESK'),
	('GAB',	'GABINETE'),
	('FOMAG',	'FONDO MAGISTERIO'),
	('IMAP',	'FCVIMAP'),
	('HVIRT',	'Hospital Virtual'),
	('CIEHIC',	'CIEHIC'),
	('CRM',	'CRM'),
	('FCVHIC',	'FCV Hospital Internacional de Colombia'),
	('SMAGAT',	'SMARTGATE'),
	('GESCAM',	'Gestion de camilleros (HIC)'),
	('OTAS',	'Otas')
SET IDENTITY_INSERT hdBaseDatos ON

SELECT * FROM hdBaseDatos

INSERT INTO hdProducto(nomProducto, desProducto) VALUES 
	('FCVCITWEB', 'CITAS WEB'),
	('SAHIWEB', 'SahiWeb'),
	('FCVHV', 'Hojas de Vida WEB'),
	('HELPDESK', 'HERRAMIENTA DE HELP DESK'),
	('SAHI2', 'SAHI2.0'),
	('TELEPATH', 'TelePath'),
	('PVITAL', 'PUNTOS VITAL')

	SELECT * FROM hdProducto

INSERT INTO hdModulo(idProducto, nomModulo, desModulo) VALUES
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'FCVCITWEB'), 'MODCITWEB', 'CITAS WEB'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHIWEB'), 'HCEWEB', 'Historia Clinica Web'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'FCVHV'), 'FCVHV-1', 'Hojas de Vida WEB'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'HELPDESK'), 'TICKETS', 'HERRAMIENTA DE HELP DESK'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'HCES2', 'Historia Clínica SAHI2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'VENS2', 'Faturación y Ventas SAHI2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'PRES2', 'Presupuesto Sahi2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'ADMS2', 'Admisiones SAHI2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'FRS2', 'Farmacia Robotizada'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'ACFS2', 'Activos Fijos SAHI2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'VITS2', 'Vital SAHI2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'APL', 'S2	Administración de Aplicación SAHI2'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'SAHI2'), 'AUD', 'Auditoría'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'TELEPATH'), 'TELESEGU', 'Modulo Seguridad'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'TELEPATH'), 'TELEPROC', 'Módulo Procesos'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'TELEPATH'), 'TELEBASI', 'Módulo Básico'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'TELEPATH'), 'TELEREP', 'Módulo Reportes'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'PVITAL'), 'MNTO', 'Mantenimiento'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'PVITAL'), 'ALID', 'Aliadas'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'PVITAL'), 'MVTO', 'Movimiento'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'PVITAL'), 'CLIE', 'Clientes'),
	((SELECT idProducto FROM hdProducto WHERE nomProducto = 'PVITAL'), 'USUA', 'Usuarios')

	SELECT * FROM hdModulo

INSERT INTO hdFuncionalidad(idModulo, nomFuncionalidad, desFuncionalidad) VALUES 
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'MODCITWEB'), '1395', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '929', 'Pacientes'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '930', 'Procesos'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '931', 'Consultas/Evoluciones'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '932', 'Orden Medicamentos'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '933', 'Login'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '934', 'Historial'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCEWEB'), '935', 'Egreso de UCI'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'TICKETS'), '1409', 'HERRAMIENTA DE HELPDESK'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '950', 'Login'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '951', 'Bandeja de entrada'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '952', 'Menú Principal'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '953', 'Consulta Historia (Árbol)'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '954', 'Paciente Actual'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '955', 'Búsqueda de Imágenes DICOM'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '956', 'Consentimientos'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '957', 'Consulta médico General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '958', 'Evoluciones'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '959', 'Consulta Recién Nacido'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '960', 'Consulta Obstétrica'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '961', 'Consulta de Odontologia'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '962', 'Consulta o Hoja de Ingreso'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '963', 'Consulta de Trauma'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '964', 'Consulta de Anestesia'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'HCES2'), '965', 'Triage'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1204', 'Generación Notas Crédito Formato VEKTIS-Enlace AZV'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1205', 'Generación NotasCrédito -RASS PTESA'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1206', 'Generación NotasCrédito- Archivo Plano Nueva EPS'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1201', 'Generación Facturas Formato VEKTIS-Enlace AZV'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1202', 'Generación Facturas Electrónicas -RASS PTESA'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1203', 'Generación Facturas- Archivo Plan Nueva EPS'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VENS2'), '1348', 'Hoja de gasto'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'ADMS2'), '1349', 'Tablero de administración de camas'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'ADMS2'), '1350', 'Reporte Censo de camas y pacientes'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'ADMS2'), '1394', 'Resolución 450'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'FRS2'), '1329', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'ACFS2'), '1325', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'VITS2'), '1232', 'Eventos'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'APL'), '1353', 'Conf.Promoción y prevención'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'TELESEGU'), '1390', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'TELEPROC'), '1391', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'TELEBASI'), '1392', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'TELEREP'), '1388', 'General'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'MNTO'), '1399', 'Mantenimiento'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'ALID'), '1400', 'Aliadas'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'MVTO'), '1404', 'Movimiento'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'CLIE'), '1402', 'Clientes'),
	((SELECT idModulo FROM hdModulo WHERE nomModulo = 'USUA'), '1401', 'Usuarios')

ROLLBACK TRAN
COMMIT TRAN


BEGIN TRAN
INSERT INTO hdTipoServicio(codServicio, nomTipoServicio) VALUES
	('COR', 'Cuenta Correo Electrónico'),
	('RED', 'Conectividad'),
	('PAN', 'Cuenta Mensajeria Interna'),
	('WEB', 'Internet'),
	('APL', 'Cuentas en el Terminal Server'),
	('BCK', 'Backup de Archivos_Compartir'),
	('SCUR', 'Cuenta de Usuario De Red'),
	('SCIP', 'Cuenta de Telefonia IP'),
	('SOTR', 'Otros'),
	('SPWEB', 'Adm de Servidores Web'),
	('TEL', 'Telecomunicaciones'),
	('CPS', 'Copias de Seguridad'),
	('RCS', 'Recuperación de Copias de Seguridad'),
	('RID', 'Recuperación de Imágenes DICOM y Estudios'),
	('CINTAS', 'Cambio Cintas Libreria Robot'),
	('ALC', 'Alistamiento Cintas Libreria HIC'),
	('CIB', 'Ciberseguridad')

	SELECT * FROM hdTipoServicio
ROLLBACK TRAN
COMMIT TRAN

BEGIN TRAN
SET IDENTITY_INSERT hdTipoDocumento OFF
INSERT INTO hdTipoDocumento(nomTipoDocumento, abrNom) VALUES
	('Cédula de ciudadania', 'CC'),
	('Pasaporte', 'PS')
SET IDENTITY_INSERT hdTipoDocumento ON

INSERT INTO hdRol(nomRol) VALUES
	('Aministrador'),
	('Usuario')

INSERT INTO hdEmpresa(nomEmpresa) VALUES
	('Fundación Cardiovascular de colombia')

INSERT INTO hdArea(idEmpresa, nomArea) VALUES
	((SELECT idEmpresa FROM hdEmpresa WHERE nomEmpresa = 'Fundación Cardiovascular de colombia'), 'Dirección de sistemas informáticos'),
	((SELECT idEmpresa FROM hdEmpresa WHERE nomEmpresa = 'Fundación Cardiovascular de colombia'), 'Fábrica de software')

INSERT INTO hdCargo(idArea, nomCargo) VALUES 
	((SELECT idArea FROM hdArea WHERE nomArea = 'Dirección de sistemas informáticos'), 'Analista de helpdesk'),
	((SELECT idArea FROM hdArea WHERE nomArea = 'Fábrica de software'), 'Desarrollador junior'),
	((SELECT idArea FROM hdArea WHERE nomArea = 'Fábrica de software'), 'Tester')

ROLLBACK TRAN
COMMIT TRAN