import Usuario, { loginRequestType } from '@/backend/models/Usuario'
import bcryptHash from '@/backend/utils/bcryptHash'
import prisma from './PrismaProvider'
import { isNumber } from '../utils/isInstance'

class HdUserProvider {
  static async getAll () {
    const users = await prisma.hdUsuario.findMany({
      include: {
        hdCargo: true,
        hdTipoDocumento: true
      }
    })
    return users
  }

  static async getById (idUser: number) {
    const user = await prisma.hdUsuario.findUnique({
      where: {
        idUsuario: idUser
      }
    })
    if (!user) {
      return null
    }
    return user
  }

  static async loginByEmailNumDoc ({ emailUsuario, password, numDocumento }: loginRequestType) {
    const where = emailUsuario ? { emailUsuario } : { numDocumento }
    const user = await prisma.hdUsuario.findUnique({
      where,
      include: {
        hdTipoDocumento: true,
        hdCargo: {
          include: {
            hdArea: {
              include: {
                hdEmpresa: true
              }
            }
          }
        }
      }
    })
    if (!user) {
      return null
    }

    const passwordIsValid = await bcryptHash.compare({ text: password, hash: user.password })
    if (!passwordIsValid) return null
    user.password = ''
    const newUser = new Usuario({ ...user, idCargo: user.hdCargo, idTipoDocumento: user.hdTipoDocumento })
    return newUser
  }

  static async createUser (user: Usuario) {
    const { nomUsuario: newNomusuario, emailUsuario: newEmailUsuario, idCargo: newIdCargo, numDocumento: newNumDocumento, idTipoDocumento: newIdTipoDocumento, numTelefono: newNumTelefono, password: newPassword, idRol: newRol } = user
    if (!isNumber(newIdCargo) || !isNumber(newIdTipoDocumento) || !isNumber(newRol)) throw new Error('El idCargo y el idTipoDocumento deben ser números')
    const newPasswordEncrypt:string = await bcryptHash.hash({ text: newPassword })
    const newUser = await prisma.hdUsuario.create({
      data: {
        emailUsuario: newEmailUsuario,
        idCargo: newIdCargo,
        idTipoDocumento: newIdTipoDocumento,
        nomUsuario: newNomusuario,
        numDocumento: newNumDocumento,
        numTelefono: newNumTelefono,
        password: newPasswordEncrypt,
        idRol: newRol
      }
    })
    return newUser
  }
}

export default HdUserProvider
