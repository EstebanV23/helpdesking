import React, { useId } from 'react'
import Style from './txtArea.module.css'

type Props = {
  props?: React.ReactHTMLElement<HTMLTextAreaElement>
  children?: React.ReactNode
  disabled?: boolean
  labelText?: string
}

export default function TxtArea ({ children, labelText, disabled, ...props }: Props) {
  const idTextArea = useId()
  return (
    <div className={Style.contentTextareaIcon}>
      <textarea disabled={disabled} id={idTextArea} className={Style.textarea} {...props}>
        {children}
      </textarea>
      <label htmlFor={idTextArea} className={Style.labelTextarea}>{labelText}</label>
    </div>
  )
}
