import React from 'react'
import Style from './infoTable.module.css'

export default function InfoTable ({ children }: { children: React.ReactNode}) {
  return (
    <aside className={Style.table}>
      {children}
    </aside>
  )
}
