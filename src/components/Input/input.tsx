'use client'
import React, { useEffect } from 'react'
import Style from './input.module.css'
import MyIcon from '../myIcon/myIcon'

type InputProps = {
  label?: string
  name: string
  icon?: string
  disabled?: boolean
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  props?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  errorInput?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<any>>
}

export default function Input ({ label, name, placeholder, type, icon, disabled, errorInput, value = '', setValue, onClick, ...props }: InputProps) {
  const [valueInput, setValueInput] = React.useState(value)

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
    setValue && setValue(e.target.value)
  }

  useEffect(() => {
    if (!setValue) return
    setValue(valueInput)
  }, [valueInput, setValue])

  return (
    <div className={Style.contentInput} onClick={onClick}>
      <section className={Style.contentInputIcon}>
        <input disabled={disabled} className={`${Style.input} ${icon && Style.inputPadding} ${errorInput && Style.errorStyle}`} type={type ?? 'text'} name={name} id={name} placeholder={placeholder} onChange={handleClick} value={value || valueInput} autoComplete='off' {...props} />
        {icon && <MyIcon fontSize={31} icon={icon} className={`${Style.icon} ${errorInput && Style.errorStyle}`} />}
      </section>
      <label htmlFor={name} className={`${Style.labelInput} ${errorInput && Style.errorStyle}`}>{label}</label>
    </div>
  )
}
