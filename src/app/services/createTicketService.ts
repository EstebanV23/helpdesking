import Actividad from '@/backend/models/Actividad'
import { baseUrl } from '../cons/baseUrl'
import Ticket from '@/backend/models/Ticket'
import TicketDet from '@/backend/models/TicketDet'

type Props = {
  data: {
    ticket: Ticket,
    activity: Actividad
    ticketDet: TicketDet
  }
  token: string
}

export default async function createTicketService ({ data, token }: Props) {
  return fetch(`${baseUrl}/ticket/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(async (res) => {
      const response = await res.json()
      console.log({ response })
      if (res.status !== 200) throw new Error(response.error)
      return response
    })
}
