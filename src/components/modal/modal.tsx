import React from 'react'
import Style from './modal.module.css'
import MyIcon from '../myIcon/myIcon'

type Props = {
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal ({ children, open, setOpen }: Props) {
  return (
    <section className={Style.contenModal}>
      <div
        className={`${Style.modal} ${open && Style.modalOpen}`}
      >
        <MyIcon className={Style.iconClose} icon='tabler:circle-x' fontSize={23} onClick={() => setOpen(false)} />
        {children}
      </div>
    </section>
  )
}
