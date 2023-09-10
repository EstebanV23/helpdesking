import React from 'react'
import Style from './button.module.css'

type ButtonProps = {
  children: React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  props?: React.HTMLAttributes<HTMLButtonElement>
}

export default function Button ({ type, children, ...props }: ButtonProps) {
  return (
    <button type={type ?? 'button'} className={Style.button}>{children}</button>
  )
}
