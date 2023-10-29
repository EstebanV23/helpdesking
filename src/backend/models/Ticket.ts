import SubTipoSol from './SubTipoSol'
import TipoSol from './TipoSol'
import Usuario from './Usuario'

class Ticket {
  idTicket: number
  numTicket: string
  solicitud: string
  fechaRegistro: Date
  fechaCierre: Date
  indCierre: boolean
  idUsuarioRegistra: Usuario | number
  numAgilo: string
  idTipoSol?: TipoSol | number
  idSUbTipoSol?: SubTipoSol | number
  constructor (data: Ticket) {
    const { idTicket, numTicket, solicitud, fechaRegistro, fechaCierre, indCierre, idUsuarioRegistra, numAgilo, idTipoSol, idSUbTipoSol } = data
    this.idTicket = idTicket
    this.numTicket = numTicket
    this.solicitud = solicitud
    this.fechaRegistro = fechaRegistro
    this.fechaCierre = fechaCierre
    this.indCierre = indCierre
    this.idUsuarioRegistra = idUsuarioRegistra
    this.numAgilo = numAgilo
    this.idTipoSol = idTipoSol
    this.idSUbTipoSol = idSUbTipoSol
  }
}

export default Ticket
