'use client'

import { UserContext } from '@/app/userContext'
import Cargo from '@/backend/models/Cargo'
import Usuario from '@/backend/models/Usuario'
import React, { useContext } from 'react'
import Area from '@/backend/models/Area'
import Empresa from '@/backend/models/Empresa'
import TipoDocumento from '@/backend/models/TipoDocumento'
import InfoTable from '../infoTable/infoTable'

export default function UserInfo () {
  const { user } = useContext(UserContext)

  if (user === null) {
    console.log('User null')
    return
  }

  console.log({ user })

  const { nomUsuario, emailUsuario, numDocumento, idCargo, idTipoDocumento } = user as Usuario
  const { nomCargo, hdArea } = idCargo as Cargo & { hdArea: Area }
  const { nomArea, hdEmpresa } = hdArea as Area & { hdEmpresa: Empresa }
  const { nomEmpresa } = hdEmpresa as Empresa
  const { nomTipoDocumento, abrNom } = idTipoDocumento as TipoDocumento

  return (
    <section>
      <h2>Datos del colaborador</h2>
      <InfoTable>
        <p><strong>Nombre:</strong> {nomUsuario}</p>
        <p><strong>Email:</strong> {emailUsuario}</p>
        <p><strong>Número de documento:</strong> {numDocumento}</p>
        <p><strong>Tipo de documento:</strong> {nomTipoDocumento} ({abrNom})</p>
        <p><strong>Cargo:</strong> {nomCargo}</p>
        <p><strong>Area:</strong> {nomArea}</p>
        <p><strong>Emprea:</strong> {nomEmpresa}</p>
      </InfoTable>
    </section>
  )
}
