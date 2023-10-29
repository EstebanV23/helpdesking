class TipoSol {
  idTipoSol: number
  nomTipoSol: string
  abrNom: string
  constructor (data: TipoSol) {
    const { idTipoSol, nomTipoSol, abrNom } = data
    this.idTipoSol = idTipoSol
    this.nomTipoSol = nomTipoSol
    this.abrNom = abrNom
  }
}

export default TipoSol
