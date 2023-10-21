import { hdCargo } from './CargoType'
import { hdTipoDocumento } from './TipoDocumentoType'

interface newUserType {
  nomUsuario: string
  password: string
  emailUsuario: string
  numDocumento: string
  numTelefono: string
  idTipoDocumento: number
  idCargo: number
}

interface loginRequestType {
  emailUsuario: string
  password: string
}

interface requestNewUser {
  nomUsuario: string
  password: string
  emailUsuario: string
  numDocumento: string
  numTelefono: string
  idTipoDocumento: hdTipoDocumento | null | number
  idCargo: hdCargo | null | number
}

interface hdUsuario extends requestNewUser {
  idUsuario: number
}
export type { requestNewUser, hdUsuario, newUserType, loginRequestType }
