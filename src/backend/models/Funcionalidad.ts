import Modulo from './Modulo'

class Funcionalidad {
  idFuncionalidad: number
  nomFunc: string
  desFunc: string
  idModulo?: Modulo | number
  constructor (data: Funcionalidad) {
    const { idFuncionalidad, nomFunc, desFunc, idModulo } = data
    this.idFuncionalidad = idFuncionalidad
    this.nomFunc = nomFunc
    this.desFunc = desFunc
    this.idModulo = idModulo
  }
}

export default Funcionalidad
