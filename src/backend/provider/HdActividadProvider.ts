import Actividad from '../models/Actividad'
import PrismaProvider from './PrismaProvider'
import { isNumber } from '../utils/isInstance'

class HdActividadProvider {
  static async createHdActividad (actividad: Actividad) {
    const { idTicket, idUsuario, desActividad } = actividad
    if (!idTicket || !idUsuario || !desActividad || !isNumber(idTicket) || !isNumber(idUsuario)) throw new Error('Hay campos que deben ser obligatorios')
    const newActividad = await PrismaProvider.hdActividad.create({
      data: {
        idTicket,
        idUsuario,
        desActividad
      }
    })
    return newActividad
  }

  static async getAllActivitiesFromTicket (idTicket: number) {
    const actividades = await PrismaProvider.hdActividad.findMany({
      where: {
        idTicket
      },
      include: {
        hdUsuario: {
          select: {
            nomUsuario: true
          }
        }
      },
      orderBy: {
        fecRegistro: 'desc'
      }
    })
    return actividades
  }
}

export default HdActividadProvider
