import Ticket from './Ticket'
import TipoServicio from './TipoServicio'

class TipoServicioTicketDet {
  idTipoServicio: TipoServicio | number
  idTicket: Ticket | number
  constructor (data: TipoServicioTicketDet) {
    const { idTipoServicio, idTicket } = data
    this.idTipoServicio = idTipoServicio
    this.idTicket = idTicket
  }
}

export default TipoServicioTicketDet
