import getOneTicketService from '@/app/services/getOneTicketService'
import React from 'react'
import Cookies from 'js-cookie'

export default async function page ({ params }: { params: { idTicket: string } }) {
  const { idTicket } = params

  const ticket = await getOneTicketService({ token: Cookies.get('token') as string, idTicket }).then(data => data)

  console.log({ticket})

  if (!ticket) {
    return (
      <div>
        <h2>
          UPPSSS...
        </h2>
        <strong>Aquí no hay naaaaaaaa</strong>
      </div>
    )
  }
  return (
    <div>IdTicket</div>
  )
}
