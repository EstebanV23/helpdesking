import { hdTipoSol } from './TipoSolType'

interface hdSubTipoSol {
  idSubTipoSol: number
  nomSubTipoSol: string
  abrNom: string
  idTipoSol: hdTipoSol
}

export type { hdSubTipoSol }
