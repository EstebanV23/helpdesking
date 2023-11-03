import Cargo from './Cargo'
import Rol from './Rol'
import TipoDocumento from './TipoDocumento'

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
  emailUsuario?: string
  password: string
  numDocumento?: string
}

interface requestNewUser {
  nomUsuario: string
  password: string
  emailUsuario: string
  numDocumento: string
  numTelefono: string
  idTipoDocumento: TipoDocumento | number
  idCargo: Cargo | number
}

class Usuario {
  idUsuario: number
  nomUsuario: string
  password: string
  emailUsuario: string
  numDocumento: string
  numTelefono: string
  idTipoDocumento?: TipoDocumento | number
  idCargo?: Cargo | number
  idRol?: Rol | number
  constructor (data: Usuario) {
    const { idUsuario, nomUsuario, password, emailUsuario, numDocumento, numTelefono, idTipoDocumento, idCargo } = data
    this.idUsuario = idUsuario
    this.nomUsuario = nomUsuario
    this.password = password
    this.emailUsuario = emailUsuario
    this.numDocumento = numDocumento
    this.numTelefono = numTelefono
    this.idTipoDocumento = idTipoDocumento
    this.idCargo = idCargo
  }
}

export type { requestNewUser, newUserType, loginRequestType, Usuario }
export default Usuario
