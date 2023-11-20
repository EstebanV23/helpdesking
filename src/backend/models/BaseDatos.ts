class BaseDatos {
  idBaseDatos: number
  nomBaseDatos: string
  desBaseDatos: string

  constructor (data: BaseDatos) {
    const { idBaseDatos, nomBaseDatos, desBaseDatos } = data
    this.idBaseDatos = idBaseDatos
    this.nomBaseDatos = nomBaseDatos
    this.desBaseDatos = desBaseDatos
  }
}

export default BaseDatos
