'use client'
import getTypesService from '@/app/services/getTypesService'
import Ticket from '@/backend/models/Ticket'
import TipoSol from '@/backend/models/TipoSol'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Select from '../select/select'
import SubTipoSol from '@/backend/models/SubTipoSol'
import getSubTypesService from '@/app/services/getSubTypesService'

type Props = {
  values?: Ticket
  saveObject: Object
  setSaveObject?:React.Dispatch<React.SetStateAction<Object>>
  nomKeySaveType: string
  nomKeySaveSubType: string
  className?: string
}

export default function TypeAndSubType ({ values, className, nomKeySaveSubType, nomKeySaveType, saveObject, setSaveObject }: Props) {
  const [types, setTypes] = useState<TipoSol[]>([])
  const [typeSelected, setTypeSelected] = useState(values?.idTipoSol)
  const [subTypeSelected, setSubTypeSelected] = useState(values?.idSubTipoSol)
  const [subTypes, setSubTypes] = useState<SubTipoSol[]>([])
  const token = Cookies.get('token') as string

  useEffect(() => {
    getTypesService({ token })
      .then(data => {
        setTypes(data.data)
      })
  }, [token])

  useEffect(() => {
    setSubTypeSelected(undefined)
    if (typeSelected) {
      getSubTypesService({ token, idTipoSol: typeSelected as number })
        .then(data => {
          setSubTypes(data.data)
        })
    }
  }, [typeSelected, token])

  useEffect(() => {
    if (!saveObject || !setSaveObject) return
    setSaveObject({
      ...saveObject,
      [nomKeySaveType]: typeSelected,
      [nomKeySaveSubType]: subTypeSelected
    })
  }, [subTypeSelected, typeSelected])

  return (
    <div className={className}>
      <Select defaultText='Selecciona un tipo' labelText='Tipo de solicitud' name='idTipoSol' setValue={setTypeSelected}>
        {types?.map(type => <option key={type.idTipoSol} defaultChecked={type.idTipoSol === typeSelected} value={type.idTipoSol}>{type.nomTipoSol}</option>)}
      </Select>
      <Select defaultText='Selecciona un sub tipo de solicitud' labelText='Sub tipo de solicitud' name='idSubTipoSol' setValue={setSubTypeSelected}>
        {subTypes?.map(type => <option key={type.idSubTipoSol} defaultChecked={type.idSubTipoSol === subTypeSelected} value={type.idSubTipoSol}>{type.nomSubTipoSol}</option>)}
      </Select>
    </div>
  )
}
