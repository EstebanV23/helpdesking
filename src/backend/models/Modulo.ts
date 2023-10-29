import Producto from './Producto'

class Modulo {
  idModulo: number
  nomModulo: string
  desModulo: string
  idProducto?: Producto | number
  constructor (data: Modulo) {
    const { idModulo, nomModulo, desModulo, idProducto } = data
    this.idModulo = idModulo
    this.nomModulo = nomModulo
    this.desModulo = desModulo
    this.idProducto = idProducto
  }
}

export default Modulo
