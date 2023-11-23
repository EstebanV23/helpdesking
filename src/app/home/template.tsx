import CloseSession from '@/components/closeSession/closeSession'
import Redirect from '@/components/redirect/redirect'
import React from 'react'
import Style from './template.module.css'
import MyIcon from '@/components/myIcon/myIcon'

const defaultSize = 23

export default function template ({ children }: { children: React.ReactNode }) {
  return (
    <section className={Style.displayContent}>
      <nav className={Style.navMain}>
        <ul className={Style.contenNav}>
          <Redirect popText='Inicio' href='/home'><MyIcon icon='tabler:home' fontSize={defaultSize} /></Redirect>
          <Redirect popText='Crear solicitud' href='/home/crear-solicitud/'><MyIcon icon='tabler:square-plus-2' fontSize={defaultSize} /></Redirect>
          <Redirect popText='Buscar tickets solicitud' href='#'><MyIcon icon='tabler:file-search' fontSize={defaultSize} /></Redirect>
          <Redirect popText='Editar información' href='#'><MyIcon icon='tabler:user-square-rounded' fontSize={defaultSize} /></Redirect>
          <CloseSession onlyIcon position='right' fontSize={defaultSize} />
        </ul>
      </nav>
      <main className={Style.contentMainLimit}>
        {children}
      </main>
    </section>
  )
}
