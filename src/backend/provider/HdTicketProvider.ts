import Ticket from '../models/Ticket'
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

  static async getHdTicketByUser (idUsuario: number) {
    const tickets = await prisma.hdTicket.findMany({
      where: {
        idUsuarioResponsable: idUsuario
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
      }
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
}

export default HdTicketProvider
