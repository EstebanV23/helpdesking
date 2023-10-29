class TipoDocumento {
  idTipoDocumento: number
  nomTipoDocumento: string
  abrNom: string
  constructor (data: TipoDocumento) {
    const { idTipoDocumento, nomTipoDocumento, abrNom } = data
    this.idTipoDocumento = idTipoDocumento
    this.nomTipoDocumento = nomTipoDocumento
    this.abrNom = abrNom
  }
}

export default TipoDocumento
