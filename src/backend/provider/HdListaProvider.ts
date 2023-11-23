import PrismaProvider from './PrismaProvider'

class HdListaProvider {
  static async getListaFromType (idTipoLista: number) {
    const lista = await PrismaProvider.hdLista.findMany({
      where: {
        idTipoLista
      }
    })
    return lista
  }
}

export default HdListaProvider
