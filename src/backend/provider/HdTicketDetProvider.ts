import TicketDet from '../models/TicketDet'
import PrismaProvider from './PrismaProvider'

class HdTicketDetProvider {
  static async getHdTicketDetByIdTicket (idTicket: number) {
    const ticketDet = await PrismaProvider.hdTicketDet.findFirst({
      where: {
        idTicket,
        AND: {
          indHabilitado: true
        }
      }
    })
    return ticketDet
  }

  static async getHdTicketDetByIdTicketAndTypeSol (idTicket: number, idTipoSol: number) {
    const ticketDet = await PrismaProvider.hdTicketDet.findFirst({
      where: {
        idTicket,
        AND: {
          idTipoSol
        }
      }
    })
    return ticketDet
  }

  static async createTicketDet (ticketDet: TicketDet) {
    console.log({ ticketDet })
    const newTicketDet = await PrismaProvider.hdTicketDet.create({
      data: {
        ...ticketDet,
        idUsuario: ticketDet.idUsuario as number,
        idTicket: ticketDet.idTicket as number,
        idProducto: ticketDet.idProducto as number,
        idModulo: ticketDet.idModulo as number,
        idFuncionalidad: ticketDet.idFuncionalidad as number,
        idSeveridadLista: ticketDet.idSeveridadLista as number,
        idContinuidadLista: ticketDet.idContinuidadLista as number,
        idJustificacionLista: ticketDet.idJustificacionLista as number,
        idSoftClasiLista: ticketDet.idSoftClasiLista as number,
        idTipoSol: ticketDet.idTipoSol as number,
        idArea: ticketDet.idArea as number,
        idCargo: ticketDet.idCargo as number,
        idBaseDatos: ticketDet.idBaseDatos as number,
        idHardClasiLista: ticketDet.idHardClasiLista as number,
        idFrecuenciaLista: ticketDet.idFrecuenciaLista as number
      }
    })
    return newTicketDet
  }

  static async getTicketDetByTicketAndTypeSol (idTicket: number, idTipoSol: number) {
    const ticketDet = await PrismaProvider.hdTicketDet.findFirst({
      where: {
        idTicket,
        idTipoSol
      }
    })
    return ticketDet
  }

  static async updateTicketDet (ticketDet: TicketDet) {
    const { idTicketDet, idProducto, idTicket, idFrecuenciaLista, idModulo, idFuncionalidad, version, idSeveridadLista, idContinuidadLista, indReincidente, equiposDet, capaciDes, capaciFec, capaciLug, dbTabla, dbCampos, idJustificacionLista, dbCual, dbIndAut, dbObser, servNumDoc, idCargo, idArea, idHardClasiLista, hardEquipo, idSoftClasiLista, softPantalla, softReporte, softVersProg, softEquipo, softUsuarios, softIndTodEqui, indHabilitado, fecRegistro, fecModificacion, idBaseDatos, idUsuario } = ticketDet
    if (!idTicketDet) throw new Error('El idTicketDet es obligatorio')
    const ticketDetUpdate = await PrismaProvider.hdTicketDet.update({
      where: {
        idTicketDet
      },
      data: {
        idProducto: idProducto as number,
        idTicket: idTicket as number,
        idModulo: idModulo as number,
        idFuncionalidad: idFuncionalidad as number,
        version,
        idSeveridadLista: idSeveridadLista as number,
        idContinuidadLista: idContinuidadLista as number,
        indReincidente,
        equiposDet,
        capaciDes,
        capaciFec,
        capaciLug,
        dbTabla,
        dbCampos,
        idFrecuenciaLista: idFrecuenciaLista as number,
        idJustificacionLista: idJustificacionLista as number,
        dbCual,
        dbIndAut,
        dbObser,
        idCargo: idCargo as number,
        idArea: idArea as number,
        idHardClasiLista: idHardClasiLista as number,
        hardEquipo,
        idSoftClasiLista: idSoftClasiLista as number,
        softPantalla,
        softReporte,
        softVersProg,
        softEquipo,
        softUsuarios,
        softIndTodEqui,
        indHabilitado,
        fecRegistro,
        fecModificacion,
        idBaseDatos: idBaseDatos as number,
        idUsuario: idUsuario as number,
        servNumDoc
      }
    })

    return ticketDetUpdate
  }

  static async desactivateTicketsDet (idTicketDet: number[]) {
    const ticketDetUpdate = await PrismaProvider.hdTicketDet.updateMany({
      where: {
        idTicketDet: {
          in: idTicketDet
        }
      },
      data: {
        indHabilitado: false
      }
    })

    return ticketDetUpdate
  }

  static async getTicketDetById (idTicketDet: number) {
    const ticketDet = await PrismaProvider.hdTicketDet.findUnique({
      where: {
        idTicketDet
      }
    })
    return ticketDet
  }

  static async onlyTicketDetDesactive (idTicketDet: number) {
    const ticketDet = await PrismaProvider.hdTicketDet.update({
      where: {
        idTicketDet
      },
      data: {
        indHabilitado: false
      }
    })
    return ticketDet
  }

  static async activeTicketDet (idTicketDet: number) {
    const ticketDet = await PrismaProvider.hdTicketDet.update({
      where: {
        idTicketDet
      },
      data: {
        indHabilitado: true
      }
    })
    return ticketDet
  }
}

export default HdTicketDetProvider
