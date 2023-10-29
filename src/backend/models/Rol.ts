class Rol {
  idRol: number
  nombreRol: string
  constructor (data: Rol) {
    const { idRol, nombreRol } = data
    this.idRol = idRol
    this.nombreRol = nombreRol
  }
}

export default Rol
