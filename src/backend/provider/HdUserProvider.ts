import { newUserType } from '@/backend/interfaceModels/UsuarioType'
import bcryptHash from '@/backend/utils/bcryptHash'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class HdUserProvider {
  async getAll () {
    const users = await prisma.hdUsuario.findMany({
      include: {
        hdCargo: true,
        hdTipoDocumento: true
      }
    })
    return users
  }

  async getById (idUser: number) {
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

  async getByEmail (emailUsuario: string, password: string) {
    const user = await prisma.hdUsuario.findUnique({
      where: {
        emailUsuario
      }
    })
    if (!user) {
      return null
    }
    const passwordIsValid = await bcryptHash.compare({ text: password, hash: user.password })
    if (!passwordIsValid) return null
    user.password = ''
    return user
  }

  async create (user: newUserType) {
    const { nomUsuario: newNomusuario, emailUsuario: newEmailUsuario, idCargo: newIdCargo, numDocumento: newNumDocumento, idTipoDocumento: newIdTipoDocumento, numTelefono: newNumTelefono, password: newPassword } = user
    const newPasswordEncrypt:string = await bcryptHash.hash({ text: newPassword })
    const newUser = await prisma.hdUsuario.create({
      data: {
        emailUsuario: newEmailUsuario,
        idCargo: newIdCargo,
        idTipoDocumento: newIdTipoDocumento,
        nomUsuario: newNomusuario,
        numDocumento: newNumDocumento,
        numTelefono: newNumTelefono,
        password: newPasswordEncrypt
      }
    })
    return newUser
  }
}

export default HdUserProvider
