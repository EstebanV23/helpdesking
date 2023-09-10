import React, { HtmlHTMLAttributes } from 'react'
import Style from './input.module.css'

type InputProps = {
  label: string
  name: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  props?: HtmlHTMLAttributes<HTMLInputElement>
}

export default function Input ({ label, name, placeholder, type, ...props }: InputProps) {
  return (
    <div className={Style.contentInput}>
      <input className={Style.input} type={type ?? 'text'} name={name} id={name} placeholder={placeholder} autoComplete='off' {...props} />
      <label htmlFor={name} className={Style.labelInput}>{label}</label>
    </div>
  )
}
