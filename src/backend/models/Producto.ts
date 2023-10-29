class Producto {
  idProducto: number
  nomProducto: string
  desProducto: string

  constructor (data: Producto) {
    const { idProducto, nomProducto, desProducto } = data
    this.idProducto = idProducto
    this.nomProducto = nomProducto
    this.desProducto = desProducto
  }
}

export default Producto
