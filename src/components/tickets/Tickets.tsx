'use client'
import React, { useContext, useEffect, useState } from 'react'
import Style from './tickets.module.css'
import ticketsByUser from '@/app/services/ticketsByUser'
import { UserContext } from '@/app/userContext'
import Ticket from '@/backend/models/Ticket'
import Cookies from 'js-cookie'
import TicketsTable from '../ticketsTable/ticketsTable'
import { hdTipoSol } from '@prisma/client'

export default function Tickets () {
  const [tickets, setTickets] = useState<(Ticket & {hdTipoSol: hdTipoSol})[] | null>(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user) return
    ticketsByUser({ idUsuario: user.idUsuario, token: Cookies.get('token') as string })
      .then(data => setTickets(data.data))
      .catch(err => console.log(err))
  }, [user])

  return (
    <section className={Style.ticketContent}>
      <h2>Gestión de tickets</h2>
      <section className={Style.contentLimit}>
        <TicketsTable tickets={tickets} />
      </section>
    </section>
  )
}
