class Empresa {
  idEmpresa: number
  nomEmpresa: string
  constructor (data: Empresa) {
    const { idEmpresa, nomEmpresa } = data
    this.idEmpresa = idEmpresa
    this.nomEmpresa = nomEmpresa
  }
}

export default Empresa
