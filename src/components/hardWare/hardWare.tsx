import React from 'react'
import Select from '../select/select'
import Lista from '@/backend/models/Lista'
import getListForTipoService from '@/app/services/getListForTipoService'
import Cookies from 'js-cookie'
import TxtArea from '../txtArea/txtArea'
import Style from './hardWare.module.css'

type Props = {
  objCreate: Object
  setObjCreate: React.Dispatch<React.SetStateAction<Object>>
  idTipoList: number
}

export default function HardWare ({ objCreate, setObjCreate }: Props) {
  const [clasificacionList, setClasificacionList] = React.useState<Lista[]>()
  const [clasificacionSelected, setClasificacionSelected] = React.useState<number>()

  const [severidadList, setSeveridadList] = React.useState<Lista[]>()
  const [severidadSelected, setSeveridadSelected] = React.useState<number>()

  const [frecuenciaList, setFrecuenciaList] = React.useState<Lista[]>()
  const [frecuenciaSelected, setFrecuenciaSelected] = React.useState<number>()

  React.useEffect(() => {
    getListForTipoService({ token: Cookies.get('token') as string, idTipoList: 8 })
      .then(data => setClasificacionList(data.data))

    getListForTipoService({ token: Cookies.get('token') as string, idTipoList: 9 })
      .then(data => setSeveridadList(data.data))

    getListForTipoService({ token: Cookies.get('token') as string, idTipoList: 10 })
      .then(data => setFrecuenciaList(data.data))
  }, [])

  React.useEffect(() => {
    if (!clasificacionSelected || !severidadSelected || !frecuenciaSelected) return
    setObjCreate({
      ...objCreate,
      idHardClasiLista: clasificacionSelected,
      idSeveridadLista: severidadSelected,
      idFrecuenciaLista: frecuenciaSelected
    })
  }, [clasificacionSelected, severidadSelected, frecuenciaSelected])

  return (
    <div>
      <h2>HARDWARE</h2>
      <div className={Style.content}>
        <Select defaultText='Selecione una clasificación' labelText='Clasificación' setValue={setClasificacionSelected}>
          {clasificacionList?.map(clasificacion => <option key={clasificacion.idLista} value={clasificacion.idLista}>{clasificacion.nomLista}</option>)}
        </Select>
        <Select defaultText='Selecione una severidad' labelText='Severidad' setValue={setSeveridadSelected}>
          {severidadList?.map(severidad => <option key={severidad.idLista} value={severidad.idLista}>{severidad.nomLista}</option>)}
        </Select>
        <Select defaultText='Selecione una frecuencia' labelText='Frecuencia' setValue={setFrecuenciaSelected}>
          {frecuenciaList?.map(frecuencia => <option key={frecuencia.idLista} value={frecuencia.idLista}>{frecuencia.nomLista}</option>)}
        </Select>
        <TxtArea labelText='Detaller de los equipos' text={objCreate?.equiposDet as string} setText={(text) => setObjCreate({ ...objCreate, equiposDet: text })} />
      </div>
    </div>
  )
}
