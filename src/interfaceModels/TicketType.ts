import { hdSubTipoSol } from './SubTipoSolType'
import { hdTipoSol } from './TipoSolType'
import type { hdUsuario } from './UsuarioType'

interface hdTicket {
  idTicket: number
  numTicket: string
  solicitud: string
  fechaRegistro: Date
  fechaCierre: Date | null
  indCierre: boolean
  idUsuarioRegistra: hdUsuario
  numAgilo: string
  idTipoSol: hdTipoSol
  idSUbTipoSol: hdSubTipoSol
}

export type { hdTicket }
