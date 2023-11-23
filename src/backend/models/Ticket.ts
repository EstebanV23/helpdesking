import SubTipoSol from './SubTipoSol'
import TipoSol from './TipoSol'
import Usuario from './Usuario'

class Ticket {
  idTicket: number
  solicitud: string
  fechaRegistro: Date
  fechaCierre?: Date
  indCierre?: boolean
  idUsuarioRegistra: Usuario | number
  numAgilo?: string
  idTipoSol: TipoSol | number
  idSubTipoSol?: SubTipoSol | number
  idUsuarioResponsable: Usuario | number
  fecModificacion: Date
  constructor (data: Ticket) {
    const { idTicket, solicitud, fechaRegistro, fechaCierre, indCierre, idUsuarioRegistra, numAgilo, idTipoSol, idSubTipoSol, idUsuarioResponsable, fecModificacion } = data
    this.idTicket = idTicket
    this.solicitud = solicitud
    this.fechaRegistro = fechaRegistro
    this.fechaCierre = fechaCierre
    this.indCierre = indCierre
    this.idUsuarioRegistra = idUsuarioRegistra
    this.numAgilo = numAgilo
    this.idTipoSol = idTipoSol
    this.idSubTipoSol = idSubTipoSol
    this.idUsuarioResponsable = idUsuarioResponsable
    this.fecModificacion = fecModificacion
  }
}

export default Ticket
