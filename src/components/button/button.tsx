import React from 'react'
import Style from './button.module.css'

type ButtonProps = {
  children: React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  props?: React.HTMLAttributes<HTMLButtonElement>
}

export default function Button ({ type, children, onClick }: ButtonProps) {
  return (
    <button type={type ?? 'button'} className={Style.button} onClick={onClick}>{children}</button>
  )
}
