import Link from 'next/link'
import React from 'react'
import Style from './redirect.module.css'
import { ButtonProps, functionHandle } from '../button/button'
import StyleButton from '../button/button.module.css'

const backgroundsColors = {
  success: Style.success,
  error: Style.error,
  warning: Style.warning,
  info: Style.info
}

type Props = {
  children?: React.ReactNode
  href: string
  props?: React.HTMLAttributes<HTMLAnchorElement>
  background?: keyof typeof backgroundsColors
}

export default function Redirect ({ href, props, children, background }: Props) {
  return (
    <Link
      href={href}
      className={`${Style.redirect} ${background && backgroundsColors[background]}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export function RedirectButton ({ children, fullContent, msg, onClick, props, toastType, type, background }: ButtonProps & {background?: keyof typeof backgroundsColors}) {
  const handleClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'] = (props) => {
    functionHandle({ msg, toastType, onClick, props })
  }
  return (
    <button
      className={`${Style.redirect} ${fullContent && StyleButton.fullContent} ${background && backgroundsColors[background]}`}
      onClick={handleClick}
      type={type ?? 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
