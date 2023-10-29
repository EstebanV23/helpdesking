import Ticket from './Ticket'
import Usuario from './Usuario'

class Actividad {
  idActividad: number
  idTicket?: Ticket | number
  idUsuario?: Usuario | number
  fechaRegistro: Date
  desActividad: string
  constructor (data: Actividad) {
    const { idActividad, idTicket, idUsuario, fechaRegistro, desActividad } = data
    this.idActividad = idActividad
    this.idTicket = idTicket
    this.idUsuario = idUsuario
    this.fechaRegistro = fechaRegistro
    this.desActividad = desActividad
  }
}

export default Actividad
