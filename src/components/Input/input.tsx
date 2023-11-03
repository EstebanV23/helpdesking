import React, { HtmlHTMLAttributes } from 'react'
import Style from './input.module.css'
import { Icon } from '@iconify/react'

type InputProps = {
  label: string
  name: string
  icon?: string
  disabled?: boolean
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  props?: HtmlHTMLAttributes<HTMLInputElement>
}

export default function Input ({ label, name, placeholder, type, icon, disabled, ...props }: InputProps) {
  return (
    <div className={Style.contentInput}>
      <section className={Style.contentInputIcon}>
        <input disabled={disabled} className={`${Style.input} ${icon && Style.inputPadding}`} type={type ?? 'text'} name={name} id={name} placeholder={placeholder} autoComplete='off' {...props} />
        {icon && <Icon fontSize={31} icon={icon} className={Style.icon} />}
      </section>
      <label htmlFor={name} className={Style.labelInput}>{label}</label>
    </div>
  )
}
