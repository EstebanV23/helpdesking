'use client'

import Style from './popText.module.css'
import React, { useEffect, useRef } from 'react'

type positionPopText = {
  top: string,
  left: string,
  right: string,
  bottom: string
}

type Props = {
  children: React.ReactNode,
  popText?: string,
  position?: keyof positionPopText,
  flasBack?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  className?: string
}

const positionPop: positionPopText = {
  top: 'topAnimate',
  left: 'leftAnimate',
  right: 'rightAnimate',
  bottom: 'bottomAnimate'
}

const DEFAULT_POSITION = 'top'
const VALUE_CONST = 15

export default function PopText ({ children, popText, position, onClick, className }: Props) {
  const positionOfPop: string = positionPop[position || DEFAULT_POSITION]
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const widthComponent = element.offsetWidth
    const heightComponent = element.offsetHeight

    if (positionOfPop === positionPop.left) {
      element.style.left = `-${widthComponent + VALUE_CONST}px`
    }
    if (positionOfPop === positionPop.right) {
      element.style.right = `-${widthComponent + VALUE_CONST}px`
    }
    if (positionOfPop === positionPop.bottom) {
      element.style.bottom = `-${heightComponent + VALUE_CONST}px`
    }
    if (positionOfPop === positionPop.top) {
      element.style.top = `-${heightComponent + VALUE_CONST}px`
    }
  }, [popText, positionOfPop])

  return (
    <div className={`${Style.defaultStyle} ${className}`} onClick={onClick}>
      <p className={`${Style.textPop} ${Style[positionOfPop]}`} ref={ref}>{popText}</p>
      {children}
    </div>
  )
}
