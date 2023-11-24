'use client'
import getTypesService from '@/app/services/getTypesService'
import TipoSol from '@/backend/models/TipoSol'
import Input from '@/components/Input/input'
import Button from '@/components/button/button'
import MyIcon from '@/components/myIcon/myIcon'
import Select from '@/components/select/select'
import UserTicketSol from '@/components/userTicketSol/userTicketSol'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import getSubTypesService from '@/app/services/getSubTypesService'
import SubTipoSol from '@/backend/models/SubTipoSol'
import TicketsTable from '@/components/ticketsTable/ticketsTable'
import Ticket from '@/backend/models/Ticket'
import getForFilters from '@/app/services/getForFiltersService'
import Style from './page.module.css'
import Usuario from '@/backend/models/Usuario'
import { toast } from 'sonner'

export default function page () {
  const [types, setTypes] = React.useState<TipoSol[]>([])
  const [typeSelected, setTypeSelected] = React.useState<number>()

  const [subTypes, setSubTypes] = React.useState<SubTipoSol[]>([])

  const [tickets, setTickets] = React.useState<Ticket[]>([])

  const [user, setUser] = React.useState<{idUsuarioRegistra: number} | {}>({})

  const [user2, setUser2] = React.useState<{idUsuarioRegistra: number} | {}>({})

  useEffect(() => {
    getTypesService({ token: Cookies.get('token') as string })
      .then(data => {
        setTypes(data.data)
      })
  }, [])

  useEffect(() => {
    if (!typeSelected) return
    getSubTypesService({ token: Cookies.get('token') as string, idTipoSol: typeSelected })
      .then(data => {
        setSubTypes(data.data)
      })
  }, [typeSelected])

  const onSubmit = async (e) => {
    e.preventDefault()
    const values = Object.fromEntries(new FormData(e.target).entries())
    console.log({ idUsuarioRegistra: user?.idUsuarioRegistra })

    const data = {
      idTicket: Number(values.idTicket) === 0 ? undefined : Number(values.idTicket),
      idUsuarioRegistra: isNaN(Number(user?.idUsuarioRegistra)) ? undefined : Number(user?.idUsuarioRegistra),
      idTipoSol: isNaN(Number(values.idTipoSol)) ? undefined : Number(values.idTipoSol),
      idSubTipoSol: isNaN(Number(values.idSubTipoSol)) ? undefined : Number(values.idSubTipoSol),
      idUsuarioResponsable: isNaN(Number(user2?.idUsuarioResponsable)) ? undefined : Number(user2?.idUsuarioResponsable)
    }
    toast.promise(getForFilters({ token: Cookies.get('token') as string, data }), {
      success: (data) => {
        const tickets = data.data
        setTickets(tickets)
        if (tickets.length === 0) {
          return 'No se han econtrado tickets con estos filtros :)'
        }
        return `Datos cargados, se ha${(tickets.length > 1) ? 'n' : ''} encontrado ${tickets.length} ticket${(tickets.length > 1) ? 's' : ''}`
      },
      error: (err) => {
        toast.error(err.message)
        return err.message
      },
      loading: 'Cargando datos'
    })
  }
  return (
    <>
      <form className={Style.content} onSubmit={onSubmit}>
        <Input
          label='Número de ticket'
          name='idTicket'
          icon='tabler:file-search'
        />
        <UserTicketSol label='Usuario registra' viewInfo={false} saveObject={user} setSaveObject={setUser} nomKeySave='idUsuarioRegistra' />
        <Select name='idTipoSol' labelText='Tipo de solicitud' setValue={setTypeSelected} defaultText='Seleccione un tipo de solicitud'>
          {types?.map(type => <option key={type.idTipoSol} value={type.idTipoSol}>{type.nomTipoSol}</option>)}
        </Select>
        <Select name='idSubTipoSol' labelText='Sub tipo de solicitud' defaultText='Seleccione un sub tipo de solicitud'>
          {subTypes?.map(type => <option key={type.idSubTipoSol} value={type.idSubTipoSol}>{type.nomSubTipoSol}</option>)}
        </Select>
        <UserTicketSol label='Usuario responsable' viewInfo={false} saveObject={user2} setSaveObject={setUser2} nomKeySave='idUsuarioResponsable' />
        <Button type='submit'>
          Buscar <MyIcon icon='tabler:search' fontSize={23} />
        </Button>
      </form>
      <TicketsTable tickets={tickets} />
    </>
  )
}
