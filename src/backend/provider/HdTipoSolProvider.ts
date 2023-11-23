import PrismaProvider from './PrismaProvider'

class HdTipoSolProvider {
  static async getAll () {
    const tipos = await PrismaProvider.hdTipoSol.findMany()
    return tipos
  }
}

export default HdTipoSolProvider
