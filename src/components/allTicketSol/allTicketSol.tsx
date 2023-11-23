'use client'

import Ticket from '@/backend/models/Ticket'
import React from 'react'
import TicketSolici from '../ticketSolici/ticketSolici'
import TypeAndSubType from '../typeAndSubType/typeAndSubType'
import UserTicketSol from '../userTicketSol/userTicketSol'
import Actividad from '@/backend/models/Actividad'
import TicketDet from '@/backend/models/TicketDet'

type Props = {
  ticketCreated?: Ticket
}

export type requestObject = {
  ticket: Ticket | null
  activity: Actividad | null
  ticketDet: TicketDet | null
}

const defaultRequestObject: requestObject = {
  ticket: null,
  activity: null,
  ticketDet: null
}

export default function AllTicketSol ({ ticketCreated }: Props) {
  const [requestObject, setRequestObject] = React.useState<requestObject>(defaultRequestObject)
  console.log({ requestObject })
  return (
    <div>
      <UserTicketSol requestObject={requestObject} setRequestObject={setRequestObject} />
      <TicketSolici text={ticketCreated?.solicitud} />
      <TypeAndSubType values={ticketCreated} />
    </div>
  )
}
