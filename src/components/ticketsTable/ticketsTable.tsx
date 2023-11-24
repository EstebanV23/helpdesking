import Ticket from '@/backend/models/Ticket'
import React from 'react'
import TicketsTableSk from '../ticketsTableSk/ticketsTableSk'
import { hdTipoSol } from '@prisma/client'
import Style from './ticketsTable.module.css'
import Redirect from '../redirect/redirect'

type Props = {
  tickets: (Ticket & {hdTipoSol: hdTipoSol})[] | null
}

export default function TicketsTable ({ tickets }: Props) {
  if (!tickets) return <TicketsTableSk />
  return (
    <table className={Style.table}>
      <thead className={Style.tableHead}>
        <tr>
          <th>Num Ticket</th>
          <th>Fecha de creación (dd-mm-aaaa)</th>
          <th>Solicitud</th>
          <th>Tipo de solicitud</th>
        </tr>
      </thead>
      <tbody className={Style.tableBody}>
        {tickets.map(ticket => {
          const { idTicket, fechaRegistro, hdTipoSol, solicitud } = ticket
          const { abrNom, nomTipoSol } = hdTipoSol
          const newFechaRegistro = new Date(fechaRegistro)
          const month = newFechaRegistro.getMonth() + 1
          const day = newFechaRegistro.getDate()
          const year = newFechaRegistro.getFullYear()
          const hour = newFechaRegistro.getHours()
          const minutes = newFechaRegistro.getMinutes()
          const seconds = newFechaRegistro.getSeconds()

          return (
            <tr key={idTicket}>
              <td className={Style.numTicket}>{idTicket}</td>
              <td className={Style.date}>
                <p className={Style.textSol}>
                  {day} - {month} - {year}
                  <small>{hour}:{minutes}:{seconds}</small>
                </p>
              </td>
              <td>
                <textarea className={Style.textContent} rows={10} disabled>
                  {solicitud}
                </textarea>
              </td>
              <td className={Style.date}>
                <p className={Style.textSol}>{abrNom} <small>({nomTipoSol})</small></p>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
