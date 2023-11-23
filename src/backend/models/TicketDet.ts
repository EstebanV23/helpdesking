import Area from './Area'
import BaseDatos from './BaseDatos'
import Cargo from './Cargo'
import Funcionalidad from './Funcionalidad'
import Lista from './Lista'
import Modulo from './Modulo'
import Producto from './Producto'
import Ticket from './Ticket'
import TipoSol from './TipoSol'
import Usuario from './Usuario'

class TicketDet {
  idTicketDet: number
  idProducto?: Producto | number
  idTicket: Ticket | number
  idModulo?: Modulo | number
  idFuncionalidad?: Funcionalidad | number
  version?: string
  idSeveridadLista?: Lista | number
  idContinuidadLista?: Lista | number
  indReincidente?: boolean
  equiposDet?: string
  capaciDes?: string
  capaciFec?: Date
  capaciLug?: string
  dbTabla?: string
  dbCampos?: string
  idFrecuenciaLista?: Lista | number
  idJustificacionLista?: Lista | number
  dbCual?: string
  dbIndAut?: boolean
  dbObser?: string
  servNumDoc?: string
  idCargo?: Cargo | number
  idArea?: Area | number
  idHardClasiLista?: Lista | number
  hardEquipo?: string
  idSoftClasiLista?: Lista | number
  softPantalla?: string
  softReporte?: string
  softVersProg?: string
  softEquipo?: string
  softUsuarios?: string
  softIndTodEqui?: boolean
  idTipoSol: TipoSol | number
  indHabilitado: boolean
  fecRegistro: Date
  fecModificacion: Date
  idBaseDatos?: BaseDatos | number
  idUsuario: Usuario | number

  constructor (data: TicketDet) {
    const { idTicketDet, idProducto, idTicket, idModulo, idFuncionalidad, version, idSeveridadLista, idContinuidadLista, indReincidente, equiposDet, capaciDes, capaciFec, capaciLug, dbTabla, dbCampos, idJustificacionLista, dbCual, dbIndAut, dbObser, servNumDoc, idCargo, idArea, idHardClasiLista, hardEquipo, idSoftClasiLista, softPantalla, softReporte, softVersProg, softEquipo, softUsuarios, softIndTodEqui, idTipoSol, indHabilitado, fecRegistro, fecModificacion, idBaseDatos, idUsuario } = data
    this.idTicketDet = idTicketDet
    this.idProducto = idProducto
    this.idTicket = idTicket
    this.idModulo = idModulo
    this.idFuncionalidad = idFuncionalidad
    this.version = version
    this.idSeveridadLista = idSeveridadLista
    this.idContinuidadLista = idContinuidadLista
    this.indReincidente = indReincidente
    this.equiposDet = equiposDet
    this.capaciDes = capaciDes
    this.capaciFec = capaciFec
    this.capaciLug = capaciLug
    this.dbTabla = dbTabla
    this.dbCampos = dbCampos
    this.idJustificacionLista = idJustificacionLista
    this.dbCual = dbCual
    this.dbIndAut = dbIndAut
    this.dbObser = dbObser
    this.servNumDoc = servNumDoc
    this.idCargo = idCargo
    this.idArea = idArea
    this.idHardClasiLista = idHardClasiLista
    this.hardEquipo = hardEquipo
    this.idSoftClasiLista = idSoftClasiLista
    this.softPantalla = softPantalla
    this.softReporte = softReporte
    this.softVersProg = softVersProg
    this.softEquipo = softEquipo
    this.softUsuarios = softUsuarios
    this.softIndTodEqui = softIndTodEqui
    this.idTipoSol = idTipoSol
    this.indHabilitado = indHabilitado
    this.fecRegistro = fecRegistro
    this.fecModificacion = fecModificacion
    this.idBaseDatos = idBaseDatos
    this.idUsuario = idUsuario
  }
}

export default TicketDet
