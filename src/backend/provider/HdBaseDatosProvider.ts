import PrismaProvider from './PrismaProvider'

class HdBaseDatosProvider {
  static async getAll () {
    const baseDatos = await PrismaProvider.hdBaseDatos.findMany()
    return baseDatos
  }
}

export default HdBaseDatosProvider