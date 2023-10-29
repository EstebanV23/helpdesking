import TipoSol from './TipoSol'

class SubTipoSol {
  idSubTipoSol: number
  nomSubTipoSol: string
  abrNom: string
  idTipoSol?: TipoSol | number
  constructor (data: SubTipoSol) {
    const { idSubTipoSol, nomSubTipoSol, abrNom, idTipoSol } = data
    this.idSubTipoSol = idSubTipoSol
    this.nomSubTipoSol = nomSubTipoSol
    this.abrNom = abrNom
    this.idTipoSol = idTipoSol
  }
}

export default SubTipoSol
