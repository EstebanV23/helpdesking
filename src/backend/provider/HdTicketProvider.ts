import Actividad from '../models/Actividad'
import Ticket from '../models/Ticket'
import TicketDet from '../models/TicketDet'
import { isNumber } from '../utils/isInstance'
import prisma from './PrismaProvider'

class HdTicketProvider {
  static async getHdTicket () {
    const tickets = await prisma.hdTicket.findMany({
      include: {
        hdActividad: {
          include: {
            hdUsuario: true
          }
        },
        hdSubTipoSol: true,
        hdTipoSol: true,
        hdUsuario: true,
        hdTicketDet: true,
        hdUsuario2: true
      }
    })
    return tickets
  }

  static async getTicketByFilters ({
    idTicket,
    idTipoSol,
    idSubTipoSol,
    idUsuarioRegistra,
    idUsuarioResponsable,
    fechaRegistro,
    indCierre,
    numAgilo,
    solicitud
  }: Ticket) {
    const tickets = await prisma.hdTicket.findMany({
      where: {
        idTicket: idTicket as number || undefined,
        idTipoSol: idTipoSol as number || undefined,
        idSubTipoSol: idSubTipoSol as number || undefined,
        idUsuarioRegistra: idUsuarioRegistra as number || undefined,
        idUsuarioResponsable: idUsuarioResponsable as number || undefined,
        fechaRegistro: {
          gt: fechaRegistro as Date || undefined
        },
        indCierre: indCierre as boolean || undefined,
        numAgilo: {
          contains: numAgilo as string || undefined
        },
        solicitud: {
          contains: solicitud as string || undefined
        }
      },
      include: {
        hdSubTipoSol: {
          select: {
            abrNom: true,
            nomSubTipoSol: true
          }
        },
        hdTipoSol: true,
        hdUsuario: {
          select: {
            nomUsuario: true
          }
        },
        hdUsuario2: {
          select: {
            nomUsuario: true
          }
        }
      },
      orderBy: {
        fecModificacion: 'desc'
      }
    })
    return tickets
  }

  static async getHdTicketById (idTicket: number) {
    const ticket = await prisma.hdTicket.findUnique({
      where: {
        idTicket
      },
      include: {
        hdActividad: {
          include: {
            hdUsuario: {
              select: {
                nomUsuario: true
              }
            }
          }
        },
        hdSubTipoSol: true,
        hdTipoSol: true,
        hdUsuario: {
          select: {
            emailUsuario: true,
            idUsuario: true,
            nomUsuario: true,
            numDocumento: true,
            numTelefono: true,
            hdCargo: {
              select: {
                nomCargo: true,
                hdArea: {
                  select: {
                    nomArea: true,
                    hdEmpresa: {
                      select: {
                        nomEmpresa: true
                      }
                    }
                  }
                }
              }
            }
          }
        },
        hdTicketDet: true,
        hdUsuario2: {
          select: {
            emailUsuario: true,
            idUsuario: true,
            nomUsuario: true,
            numTelefono: true
          }
        }
      }
    })
    return ticket
  }

  static async createHdTicket (ticket: Ticket) {
    const { solicitud, idUsuarioRegistra, numAgilo, idTipoSol, idSubTipoSol, indCierre, idUsuarioResponsable } = ticket
    if (!solicitud || !idUsuarioRegistra || !idTipoSol) throw new Error('Hay campos que deben ser obligatorios')
    const newTicket = await prisma.hdTicket.create({
      data: {
        solicitud,
        indCierre,
        idUsuarioRegistra: idUsuarioRegistra as number,
        numAgilo,
        idTipoSol: idTipoSol as number,
        idSubTipoSol: idSubTipoSol as number || undefined,
        idUsuarioResponsable: idUsuarioResponsable as number
      }
    })

    return newTicket
  }

  static async updateHdTicket (ticket: Ticket) {
    const { idTicket, solicitud, fechaCierre, indCierre, numAgilo, idTipoSol, idSubTipoSol, idUsuarioResponsable } = ticket
    if (!idTicket) throw new Error('El idTicket es obligatorio')
    const ticketUpdate = await prisma.hdTicket.update({
      where: {
        idTicket
      },
      data: {
        solicitud,
        fechaCierre,
        indCierre,
        numAgilo,
        idTipoSol: idTipoSol as number,
        idSubTipoSol: idSubTipoSol as number || undefined,
        idUsuarioResponsable: idUsuarioResponsable as number
      }
    })

    return ticketUpdate
  }

  static async getHdTicketByUser (idUsuario: number, limit: number, offset: number) {
    const limitOffset: {take: number, skip:number} | {} = (limit >= 0) && (offset >= 0) ? { take: limit, skip: offset } : {}
    const tickets = await prisma.hdTicket.findMany({
      where: {
        idUsuarioResponsable: idUsuario,
        AND: {
          indCierre: false
        }
      },
      include: {
        hdSubTipoSol: {
          select: {
            abrNom: true
          }
        },
        hdTipoSol: {
          select: {
            nomTipoSol: true,
            abrNom: true
          }
        }
      },
      orderBy: {
        fecModificacion: 'desc'
      },
      ...limitOffset
    })
    return tickets
  }

  static async updateUserTicket (idTicket: number, idUsuarioResponsable: number) {
    const ticketUpdate = await prisma.hdTicket.update({
      where: {
        idTicket
      },
      data: {
        idUsuarioResponsable
      }
    })

    return ticketUpdate
  }

  static async createTicketWithActivity (ticket: Ticket, activity: Actividad) {
    const { solicitud, idUsuarioRegistra, numAgilo, idTipoSol, idSubTipoSol, indCierre, idUsuarioResponsable } = ticket
    if (!solicitud || !idUsuarioRegistra || !idTipoSol) throw new Error('Hay campos que deben ser obligatorios')
    if (!isNumber(activity.idUsuario)) throw new Error('El id usuario debe ser válido')
    const newTicket = await prisma.hdTicket.create({
      data: {
        solicitud,
        indCierre,
        idUsuarioRegistra: idUsuarioRegistra as number,
        numAgilo,
        idTipoSol: idTipoSol as number,
        idSubTipoSol: idSubTipoSol as number || undefined,
        idUsuarioResponsable: idUsuarioResponsable as number,
        hdActividad: {
          create: {
            desActividad: activity.desActividad,
            idUsuario: activity.idUsuario
          }
        }
      }
    })

    return newTicket
  }

  static async createTicketWithActivityAndTicketDet (ticket: Ticket, activity: Actividad, ticketDet: TicketDet) {
    const { solicitud, idUsuarioRegistra, numAgilo, idTipoSol, idSubTipoSol, indCierre, idUsuarioResponsable } = ticket
    if (!solicitud || !idUsuarioRegistra || !idTipoSol) throw new Error('Hay campos que deben ser obligatorios')
    if (!isNumber(activity.idUsuario)) throw new Error('El id usuario debe ser válido')
    const newTicket = await prisma.hdTicket.create({
      data: {
        solicitud,
        indCierre,
        idUsuarioRegistra: idUsuarioRegistra as number,
        numAgilo,
        idTipoSol: idTipoSol as number,
        idSubTipoSol: idSubTipoSol as number || undefined,
        idUsuarioResponsable: idUsuarioResponsable as number,
        hdActividad: {
          create: {
            desActividad: activity.desActividad,
            idUsuario: activity.idUsuario
          }
        },
        hdTicketDet: {
          create: {
            ...ticketDet,
            idUsuario: ticketDet.idUsuario as number,
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
        }
      }
    })

    return newTicket
  }
}

export default HdTicketProvider
