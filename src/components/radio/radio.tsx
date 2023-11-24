import React from 'react'
import Style from './radio.module.css'

type Props = {
  label?: string
  className?: string
  onChange?: (value: string) => void
  name?: string
  value?: string | number
}

export default function Radio ({ label, className, name, value, onChange }: Props) {
  const handler = (e) => {
    console.log(e.currentTarget.value)
    if (onChange) onChange(e?.currentTarget?.value)
  }

  return (
    <label className={Style.container}>{label}
      <input type='radio' onChange={handler} name={name} value={value} />
      <span className={Style.checkmark} />
    </label>
  )
}
