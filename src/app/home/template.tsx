import CloseSession from '@/components/closeSession/closeSession'
import Redirect from '@/components/redirect/redirect'
import React from 'react'
import Style from './template.module.css'
import MyIcon from '@/components/myIcon/myIcon'

export default function template ({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav className={Style.navMain}>
        <ul className={Style.contenNav}>
          <Redirect href='#'>Crear solicitud</Redirect>
          <Redirect href='#'>Buscar tickets solicitud</Redirect>
          <Redirect href='#'><MyIcon icon='material-symbols:account-circle' fontSize={20} /></Redirect>
          <CloseSession />
        </ul>
      </nav>
      <main className={Style.contentMainLimit}>
        {children}
      </main>
    </section>
  )
}
