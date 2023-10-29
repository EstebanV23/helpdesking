import Area from './Area'
import Cargo from './Cargo'
import Funcionalidad from './Funcionalidad'
import Lista from './Lista'
import Modulo from './Modulo'
import Producto from './Producto'
import Ticket from './Ticket'

class TicketDet {
  idTicketDet: number
  idProducto?: Producto | number
  idTicket: Ticket | number
  idModulo?: Modulo | number
  idFuncionalidad?: Funcionalidad | number
  version?: string
  idListSeve?: Lista | number
  idListConti?: Lista | number
  indReincidente?: boolean
  equiposDet?: string
  capaciDes?: string
  capaciFec?: Date
  capaciLug?: string
  dbTabla?: string
  dbCampos?: string
  idListJust?: Lista | number
  dbCual?: string
  dbIndAut?: boolean
  dbObserv?: string
  serNumDoc?: string
  idCargo?: Cargo | number
  idArea?: Area | number
  idListHardCla?: Lista | number
  hardEquipos?: string
  idListSoftCla?: Lista | number
  softPantalla?: string
  softReporte?: string
  softVersProg?: string
  softEquip?: string
  softUsuarios?: string
  softIndTodEqui?: boolean
  idListTipoSol?: Lista | number
  indHabilitado: boolean
  fecRegistro: Date
  fecModificacion: Date

  constructor (data: TicketDet) {
    const { idTicketDet, idProducto, idTicket, idModulo, idFuncionalidad, version, idListSeve, idListConti, indReincidente, equiposDet, capaciDes, capaciFec, capaciLug, dbTabla, dbCampos, idListJust, dbCual, dbIndAut, dbObserv, serNumDoc, idCargo, idArea, idListHardCla, hardEquipos, idListSoftCla, softPantalla, softReporte, softVersProg, softEquip, softUsuarios, softIndTodEqui, idListTipoSol, indHabilitado, fecRegistro, fecModificacion } = data
    this.idTicketDet = idTicketDet
    this.idProducto = idProducto
    this.idTicket = idTicket
    this.idModulo = idModulo
    this.idFuncionalidad = idFuncionalidad
    this.version = version
    this.idListSeve = idListSeve
    this.idListConti = idListConti
    this.indReincidente = indReincidente
    this.equiposDet = equiposDet
    this.capaciDes = capaciDes
    this.capaciFec = capaciFec
    this.capaciLug = capaciLug
    this.dbTabla = dbTabla
    this.dbCampos = dbCampos
    this.idListJust = idListJust
    this.dbCual = dbCual
    this.dbIndAut = dbIndAut
    this.dbObserv = dbObserv
    this.serNumDoc = serNumDoc
    this.idCargo = idCargo
    this.idArea = idArea
    this.idListHardCla = idListHardCla
    this.hardEquipos = hardEquipos
    this.idListSoftCla = idListSoftCla
    this.softPantalla = softPantalla
    this.softReporte = softReporte
    this.softVersProg = softVersProg
    this.softEquip = softEquip
    this.softUsuarios = softUsuarios
    this.softIndTodEqui = softIndTodEqui
    this.idListTipoSol = idListTipoSol
    this.indHabilitado = indHabilitado
    this.fecRegistro = fecRegistro
    this.fecModificacion = fecModificacion
  }
}

export default TicketDet
