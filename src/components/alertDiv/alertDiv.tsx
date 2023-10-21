import Style from './alertDiv.module.css'
import React from 'react'

type AlertDivProps = {
  active: boolean
  type: 'error' | 'success' | 'warning' | 'info'
  children?: React.ReactNode
  setActive?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AlertDiv ({ active, type, children, setActive }: AlertDivProps) {
  return (
    <div className={`${!active && Style.hidden} ${Style.mainContent} ${Style[type]}`}>
      <span className={`${Style.closeButton} ${Style[type]}`} onClick={setActive ? () => setActive(false) : () => {}}><p>x</p></span>
      {children}
    </div>
  )
}
