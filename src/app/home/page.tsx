
import React from 'react'
import Style from './page.module.css'
import UserInfo from '@/components/userInfo/userInfo'
import Tickets from '@/components/tickets/Tickets'

export default function page () {
  return (
    <section>
      <header>
        <h1 className={Style.mainTitle}>Plataforma de Gestión de Tickets</h1>
        <p className={Style.textMain}>Bienvenido a la plataforma de gestión de tickets, en esta plataforma podrás crear tickets de solicitud de soporte, buscar tickets de solicitud de soporte y cerrar sesión.</p>
      </header>
      <section className={Style.contentMain}>
        <UserInfo />
        <Tickets />
      </section>
    </section>
  )
}
