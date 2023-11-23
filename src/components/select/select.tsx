import React, { useId } from 'react'
import Style from './select.module.css'

type Props = {
  props?: React.ReactHTMLElement<HTMLSelectElement>
  children?: React.ReactNode
  labelText?: string
  defaultText?: string
  name?: string
  setValue?: React.Dispatch<React.SetStateAction<any>>
}

export default function Select ({ props, children, labelText, name, defaultText, setValue }: Props) {
  const idSelect = useId()
  return (
    <div className={Style.contentSelectIcon}>
      <select
        className={Style.select}
        name={name}
        {...props}
        id={idSelect}
        onChange={setValue && ((e) => setValue(e.target?.value))}
      >
        <option>{defaultText}</option>
        {children}
      </select>
      <label className={Style.labelSelect} htmlFor={idSelect}>{labelText}</label>
    </div>
  )
}
