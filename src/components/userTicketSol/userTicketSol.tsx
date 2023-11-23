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
import { requestObject } from '../allTicketSol/allTicketSol'

export default function UserTicketSol ({ requestObject, setRequestObject }: { requestObject: requestObject, setRequestObject?: React.Dispatch<React.SetStateAction<requestObject>>}) {
  const [userSelected, setUserSelected] = useState<Usuario | null>(null)
  const [userInfo, setUserInfo] = useState<objectInfo>({})

  const { nomUsuario, emailUsuario, numDocumento, nomCargo, nomArea, nomEmpresa, nomTipoDocumento, abrNom } = userInfo

  useEffect(() => {
    console.log({ userSelected })
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

    if (!setRequestObject) return

    const { ticket } = requestObject

    if (!ticket) {
      setRequestObject({
        ...requestObject,
        ticket: {
          idUsuarioRegistra: userSelected.idUsuario
        }
      })
      return
    }

    setRequestObject({
      ...requestObject,
      ticket: {
        ...ticket,
        idUsuarioRegistra: userSelected.idUsuario
      }
    })
  }, [userSelected])

  return (
    <div className={Style.contentInfo}>
      <InfoTable className={Style.infoTable}>
        <p><strong>Nombre:</strong> {nomUsuario || <Skeleton width={120} />}</p>
        <p><strong>Email:</strong> {emailUsuario || <Skeleton width={120} />}</p>
        <p><strong>Número de documento:</strong> {numDocumento || <Skeleton width={120} />}</p>
        <p><strong>Tipo de documento:</strong> {nomTipoDocumento || <Skeleton width={100} />} ({abrNom || <Skeleton width={30} />})</p>
        <p><strong>Cargo:</strong> {nomCargo || <Skeleton width={120} />}</p>
        <p><strong>Area:</strong> {nomArea || <Skeleton width={120} />}</p>
        <p><strong>Emprea:</strong> {nomEmpresa || <Skeleton width={120} />}</p>
      </InfoTable>
      <FindUser setUserSelected={setUserSelected} userSelected={userSelected} className={Style.userSelect} />
    </div>
  )
}
