import TipoLista from './TipoLista'

class Lista {
  idLista: number
  nomLista: string
  desLista: string
  idTipoLista?: TipoLista | number
  constructor (data: Lista) {
    const { idLista, nomLista, desLista, idTipoLista } = data
    this.idLista = idLista
    this.nomLista = nomLista
    this.desLista = desLista
    this.idTipoLista = idTipoLista
  }
}

export default Lista
