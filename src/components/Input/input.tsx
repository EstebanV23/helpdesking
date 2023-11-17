import React, { HtmlHTMLAttributes } from 'react'
import Style from './input.module.css'
import MyIcon from '../myIcon/myIcon'

type InputProps = {
  label: string
  name: string
  icon?: string
  disabled?: boolean
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  props?: HtmlHTMLAttributes<HTMLInputElement>
  errorInput?: boolean
}

export default function Input ({ label, name, placeholder, type, icon, disabled, errorInput, ...props }: InputProps) {
  return (
    <div className={Style.contentInput}>
      <section className={Style.contentInputIcon}>
        <input disabled={disabled} className={`${Style.input} ${icon && Style.inputPadding} ${errorInput && Style.errorStyle}`} type={type ?? 'text'} name={name} id={name} placeholder={placeholder} autoComplete='off' {...props} />
        {icon && <MyIcon fontSize={31} icon={icon} className={`${Style.icon} ${errorInput && Style.errorStyle}`} />}
      </section>
      <label htmlFor={name} className={`${Style.labelInput} ${errorInput && Style.errorStyle}`}>{label}</label>
    </div>
  )
}
