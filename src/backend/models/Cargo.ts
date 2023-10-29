import Area from './Area'

class Cargo {
  idCargo: number
  nomCargo: string
  idArea?: Area | number
  constructor (data: Cargo) {
    const { idCargo, nomCargo, idArea } = data
    this.idCargo = idCargo
    this.nomCargo = nomCargo
    this.idArea = idArea
  }
}

export default Cargo
