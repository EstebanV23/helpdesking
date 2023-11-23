import React, { useState, useEffect } from 'react'
import Input from '../Input/input'

type Props = {
  setValue: React.Dispatch<string>
  data: object[]
  valueKey: string
  value: string
  placeholder: string
  label: string
  name: string
}

export default function InputAutoComplete ({ setValue, data, valueKey, value, placeholder, label, name }: Props) {
  const [text, setText] = useState<string>('')
  const [dataFiltered, setDataFiltered] = useState<object[]>([])

  useEffect(() => {
    if (text.length < 3) {
      setDataFiltered(data)
      return
    }
    const dataFiltered = data.filter((item: any) => {
      const value = item[valueKey].toLowerCase()
      const searchText = text.toLowerCase()
      return value.includes(searchText)
    })

    const newData = dataFiltered.map((item: any) => {
      return (
        <div
          key={item[valueKey]} onClick={() => {
            setValue(item[valueKey])
            setText('')
          }}
        >
          {item[valueKey]}
        </div>
      )
    })
    setDataFiltered(dataFiltered)
  },
  [text])

  return (
    <div>
      <Input
        label={label}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </div>
  )
}
