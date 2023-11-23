import PrismaProvider from './PrismaProvider'
class HdSubTipoSolProvider {
  static async getFromTipoSol (idTipoSol: number) {
    const subTipos = await PrismaProvider.hdSubTipoSol.findMany({
      where: {
        idTipoSol
      }
    })
    return subTipos
  }
}

export default HdSubTipoSolProvider
