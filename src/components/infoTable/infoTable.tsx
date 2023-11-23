import React from 'react'
import Style from './infoTable.module.css'

export default function InfoTable ({ children, className }: { children: React.ReactNode, className?: string}) {
  return (
    <aside className={`${Style.table} ${className}`}>
      {children}
    </aside>
  )
}
