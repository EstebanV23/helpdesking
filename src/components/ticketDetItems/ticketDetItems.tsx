import React, { useEffect, useState } from 'react'
import Style from './ticketDetItems.module.css'
import getTypesService from '@/app/services/getTypesService'
import Cookies from 'js-cookie'
import Skeleton from 'react-loading-skeleton'
import TipoSol from '@/backend/models/TipoSol'
import HardWare from '../hardWare/hardWare'

type Props = {
  idTipoSol: number
  saveObject: object
  setSaveObject: React.Dispatch<React.SetStateAction<object>>
}

export default function TicketDetItems ({ idTipoSol, saveObject, setSaveObject }: Props) {
  const [tipoSol, setTipoSol] = React.useState<TipoSol[] | null>(null)
  const [objectTicketCreate, setObjectTicketCreate] = useState<Object | {}>(saveObject)

  useEffect(() => {
    setSaveObject(objectTicketCreate)
  }, [objectTicketCreate])

  useEffect(() => {
    getTypesService({ token: Cookies.get('token') as string })
      .then(data => setTipoSol(data.data))

    setObjectTicketCreate({
      ...objectTicketCreate,
      idTipoSol
    })
  }, [idTipoSol])

  if (!tipoSol) return <Skeleton count={6} />

  return (
    <>
      {tipoSol.find(sol => sol.idTipoSol === Number(idTipoSol))?.abrNom === 'HD' && <HardWare objCreate={objectTicketCreate} setObjCreate={setObjectTicketCreate} idTipoList={idTipoSol} />}
    </>
  )
}
