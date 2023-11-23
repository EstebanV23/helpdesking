'use client'

import { UserContext } from '@/app/userContext'
import Cargo from '@/backend/models/Cargo'
import Usuario from '@/backend/models/Usuario'
import React, { useContext, useState, useEffect } from 'react'
import Area from '@/backend/models/Area'
import Empresa from '@/backend/models/Empresa'
import TipoDocumento from '@/backend/models/TipoDocumento'
import InfoTable from '../infoTable/infoTable'
import Style from './userInfo.module.css'
import Skeleton from 'react-loading-skeleton'

export type objectInfo = {
  nomUsuario?: string,
  emailUsuario?: string,
  numDocumento?: string,
  nomCargo?: string,
  nomArea?: string,
  nomEmpresa?: string,
  nomTipoDocumento?: string,
  abrNom?: string
}

export default function UserInfo () {
  const { user } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState<objectInfo>({})

  const { nomUsuario, emailUsuario, numDocumento, nomCargo, nomArea, nomEmpresa, nomTipoDocumento, abrNom } = userInfo

  useEffect(() => {
    if (!user) return
    const { nomUsuario, emailUsuario, numDocumento, idCargo, idTipoDocumento } = user as Usuario
    const { nomCargo, hdArea } = idCargo as Cargo & { hdArea: Area }
    const { nomArea, hdEmpresa } = hdArea as Area & { hdEmpresa: Empresa }
    const { nomEmpresa } = hdEmpresa as Empresa
    const { nomTipoDocumento, abrNom } = idTipoDocumento as TipoDocumento

    setUserInfo({
      nomUsuario,
      emailUsuario,
      numDocumento,
      nomCargo,
      nomArea,
      nomEmpresa,
      nomTipoDocumento,
      abrNom
    })
  }, [user])

  return (
    <section className={Style.contentMain}>
      <h2>Datos del colaborador</h2>
      <InfoTable>
        <p><strong>Nombre:</strong> {nomUsuario || <Skeleton width={120} />}</p>
        <p><strong>Email:</strong> {emailUsuario || <Skeleton width={120} />}</p>
        <p><strong>Número de documento:</strong> {numDocumento || <Skeleton width={120} />}</p>
        <p><strong>Tipo de documento:</strong> {nomTipoDocumento || <Skeleton width={100} />} ({abrNom || <Skeleton width={30} />})</p>
        <p><strong>Cargo:</strong> {nomCargo || <Skeleton width={120} />}</p>
        <p><strong>Area:</strong> {nomArea || <Skeleton width={120} />}</p>
        <p><strong>Emprea:</strong> {nomEmpresa || <Skeleton width={120} />}</p>
      </InfoTable>
    </section>
  )
}
