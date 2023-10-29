class TipoServicio {
  idTipoServicio: number
  codServicio: string
  nomServicio: string
  constructor (data: TipoServicio) {
    const { idTipoServicio, codServicio, nomServicio } = data
    this.idTipoServicio = idTipoServicio
    this.codServicio = codServicio
    this.nomServicio = nomServicio
  }
}

export default TipoServicio
