'use client'

import Ticket from '@/backend/models/Ticket'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '@/app/userContext'
import TicketSolici from '../ticketSolici/ticketSolici'
import TypeAndSubType from '../typeAndSubType/typeAndSubType'
import UserTicketSol from '../userTicketSol/userTicketSol'
import Actividad from '@/backend/models/Actividad'
import TicketDet from '@/backend/models/TicketDet'
import Button from '../button/button'
import Style from './allTicketSol.module.css'
import { toast } from 'sonner'
import RadioB from '../radioB/radioB'
import TicketDetItems from '../ticketDetItems/ticketDetItems'
import createTicketService from '@/app/services/createTicketService'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { SuccessResponse } from '@/backend/models/responseTypes'

type Props = {
  ticketCreated?: Ticket
}

export type requestObject = {
  ticket: Ticket | null
  activity: Actividad | null
  ticketDet: TicketDet | null
}

export default function AllTicketSol ({ ticketCreated }: Props) {
  const navigate = useRouter()
  const [ticket, setTicket] = React.useState<Ticket | {}>(ticketCreated ?? {})
  const { user } = useContext(UserContext)
  const [activity, setActivity] = React.useState<Actividad | {}>({})
  const [ticketDet, setTicketDet] = React.useState<TicketDet | {}>({})

  useEffect(() => {
    if (!user) return
    setActivity({
      ...activity,
      idUsuario: user.idUsuario
    })

    setTicketDet({
      ...ticketDet,
      idUsuario: user.idUsuario
    })
  }, [user])

  useEffect(() => {
    if (!ticket) return
    const { indCierre } = ticket as Ticket
    if (indCierre) {
      setTicket({
        ...ticket,
        idUsuarioResponsable: user?.idUsuario
      })
    }
  }, [ticket])

  const handleClick = () => {
    const { idTipoSol, solicitud, idUsuarioRegistra, idUsuarioResponsable } = ticket as Ticket
    const { desActividad } = activity as Actividad
    const { idHardClasiLista, idSeveridadLista, idFrecuenciaLista } = ticketDet as TicketDet

    if (!idTipoSol) toast.error('Selecciona un tipo de solicitud')
    if (!solicitud) toast.error('Escribe una solicitud')
    if (!idUsuarioRegistra) toast.error('Selecciona un usuario que registra')
    if (!idUsuarioResponsable) toast.error('Selecciona un usuario responsable')
    if (!idHardClasiLista) toast.error('Selecciona un clasificador')
    if (!idSeveridadLista) toast.error('Selecciona una severidad')
    if (!idFrecuenciaLista) toast.error('Selecciona una frecuencia')

    if (!desActividad) toast.error('Escribe una actividad')


    if (!desActividad || !idTipoSol || !solicitud || !idUsuarioRegistra || !idUsuarioResponsable || !idHardClasiLista || !idSeveridadLista || !idFrecuenciaLista) return

    console.log({
      ticket,
      activity,
      ticketDet
    })

    const data = {
      ticket: {
        ...ticket,
        idTipoSol: Number(ticket.idTipoSol),
        indCierre: Boolean(ticket.indCierre)
      },
      activity,
      ticketDet: {
        ...ticketDet,
        idUsuario: user.idUsuario as number,
        idTipoSol: Number(ticketDet.idTipoSol),
        idHardClasiLista: Number(ticketDet.idHardClasiLista),
        idSeveridadLista: Number(ticketDet.idSeveridadLista),
        idFrecuenciaLista: Number(ticketDet.idSeveridadLista)
      }
    }

    console.log({ data })
    toast.promise(createTicketService({
      token: Cookies.get('token') as string,
      data
    }), {
      success: (dataResponse: SuccessResponse) => {
        console.log({ dataResponse })
        navigate.push('/home')
        return 'Ticket creado con el número ' + dataResponse.data.idTicket
      },
      error: (err) => {
        console.log({ err })
        toast.error(err.message)
        return err.message
      },
      loading: 'Creando ticket...'
    }
    )
  }

  return (
    <div className={Style.contentTicket}>
      <UserTicketSol className={Style.infoUser} saveObject={ticket} label='Usuario que registra' setSaveObject={setTicket} nomKeySave='idUsuarioRegistra' />
      <div className={Style.ticketInfo}>
        <TicketSolici label='Solicitud' text={ticketCreated?.solicitud as string} saveObject={ticket} setSaveObject={setTicket} nomKeySave='solicitud' />
        <TypeAndSubType className={Style.contentTypes} values={ticketCreated} saveObject={ticket} setSaveObject={setTicket} nomKeySaveType='idTipoSol' nomKeySaveSubType='idSubTipoSol' />
        <div className={Style.contentActivity}>
          <TicketSolici label='Actividad' text='' saveObject={activity} setSaveObject={setActivity} nomKeySave='desActividad' />
          <RadioB saveObject={ticket} setSaveObject={setTicket} nomKeySave='indCierre' />
          {!ticket?.indCierre && <UserTicketSol viewInfo={false} className={Style.infoUser} saveObject={ticket} label='Usuario responsable' setSaveObject={setTicket} nomKeySave='idUsuarioResponsable' />}
        </div>
      </div>
      <div>
        <TicketDetItems idTipoSol={ticket?.idTipoSol} saveObject={ticketDet} setSaveObject={setTicketDet} />
      </div>
      <Button onClick={handleClick}>
        Crear
      </Button>
    </div>
  )
}
