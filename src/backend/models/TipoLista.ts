class TipoLista {
  idTipoLista: number
  nomTipo: string
  codTipo: string
  constructor (data: TipoLista) {
    const { idTipoLista, nomTipo, codTipo } = data
    this.idTipoLista = idTipoLista
    this.nomTipo = nomTipo
    this.codTipo = codTipo
  }
}

export default TipoLista
