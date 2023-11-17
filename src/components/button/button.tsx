'use client'
import React from 'react'
import Style from './button.module.css'
import { toast } from 'sonner'
import { isUndefined } from '@/backend/utils/isInstance'

export type ButtonProps = {
  children: React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  props?: React.HTMLAttributes<HTMLButtonElement>
  msg?: string
  toastType?: 'success' | 'error'
  fullContent?: boolean
}

type dataHandleFunction = {
  msg?: string
  toastType?: 'success' | 'error'
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  props: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

export const functionHandle = ({ msg, toastType, onClick, props }: dataHandleFunction) => {
  if (!isUndefined(onClick))onClick(props)
  if (msg && toastType) toast[toastType](msg)
}

export default function Button ({ type, children, onClick, msg, props, toastType = 'success', fullContent }: ButtonProps) {
  const handleClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'] = (props) => {
    functionHandle({ msg, toastType, onClick, props })
  }
  return (
    <button type={type ?? 'button'} className={`${Style.button} ${fullContent && Style.fullContent}`} onClick={handleClick} {...props}>{children}</button>
  )
}
