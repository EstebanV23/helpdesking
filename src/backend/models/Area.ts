import Empresa from './Empresa'

class Area {
  idArea: number
  nomArea: string
  idEmpresa?: Empresa | number
  constructor (data: Area) {
    const { idArea, nomArea, idEmpresa } = data
    this.idArea = idArea
    this.nomArea = nomArea
    this.idEmpresa = idEmpresa
  }
}
export default Area
