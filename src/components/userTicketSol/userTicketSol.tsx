'use client'
import Usuario from '@/backend/models/Usuario'
import React, { useEffect, useState } from 'react'
import FindUser from '../findUser/findUser'
import InfoTable from '../infoTable/infoTable'
import Cargo from '@/backend/models/Cargo'
import Area from '@/backend/models/Area'
import Empresa from '@/backend/models/Empresa'
import { objectInfo } from '../userInfo/userInfo'
import Skeleton from 'react-loading-skeleton'
import TipoDocumento from '@/backend/models/TipoDocumento'
import Style from './userTicketSol.module.css'

type Props = {
  setSaveObject: React.Dispatch<React.SetStateAction<Object | {}>>
  saveObject: Object
  nomKeySave: string
  viewInfo?: boolean
  label?: string
  className?: string
}

export default function UserTicketSol ({ setSaveObject, className, saveObject, label, nomKeySave, viewInfo = true }: Props) {
  const [userSelected, setUserSelected] = useState<Usuario | null>(null)
  const [userInfo, setUserInfo] = useState<objectInfo>({})

  const { nomUsuario, emailUsuario, numDocumento, nomCargo, nomArea, nomEmpresa, nomTipoDocumento, abrNom } = userInfo

  useEffect(() => {
    if (!userSelected) return
    const { nomUsuario, emailUsuario, numDocumento, hdCargo, hdTipoDocumento } = userSelected as Usuario & { hdCargo: Cargo, hdTipoDocumento: TipoDocumento }
    const { nomCargo, hdArea } = hdCargo as Cargo & { hdArea: Area }
    const { nomArea, hdEmpresa } = hdArea as Area & { hdEmpresa: Empresa }
    const { nomEmpresa } = hdEmpresa as Empresa
    const { nomTipoDocumento, abrNom } = hdTipoDocumento as TipoDocumento

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

    if (!setSaveObject || !saveObject) return

    console.log({
      ...saveObject,
      [nomKeySave]: userSelected.idUsuario as number
    })

    setSaveObject({
      ...saveObject,
      [nomKeySave]: userSelected.idUsuario as number
    })
  }, [userSelected])

  return (
    <div className={`${Style.contentInfo} ${className}`}>
      {viewInfo && (
        <InfoTable className={Style.infoTable}>
          <p><strong>Nombre:</strong> {nomUsuario || <Skeleton width={120} />}</p>
          <p><strong>Email:</strong> {emailUsuario || <Skeleton width={120} />}</p>
          <p><strong>Número de documento:</strong> {numDocumento || <Skeleton width={120} />}</p>
          <p><strong>Tipo de documento:</strong> {nomTipoDocumento || <Skeleton width={100} />} ({abrNom || <Skeleton width={30} />})</p>
          <p><strong>Cargo:</strong> {nomCargo || <Skeleton width={120} />}</p>
          <p><strong>Area:</strong> {nomArea || <Skeleton width={120} />}</p>
          <p><strong>Emprea:</strong> {nomEmpresa || <Skeleton width={120} />}</p>
        </InfoTable>
      )}
      <FindUser setUserSelected={setUserSelected} label={label} userSelected={userSelected} className={Style.userSelect} />
    </div>
  )
}
