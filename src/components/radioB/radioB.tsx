import React from 'react'
import Style from './radioB.module.css'
import Radio from '../radio/radio'

type Props = {
  saveObject: Object
  setSaveObject?:React.Dispatch<React.SetStateAction<Object>>
  nomKeySave: string
}

export default function RadioB ({ saveObject, setSaveObject, nomKeySave }: Props) {
  const onChange = (value: string): void => {
    if (!setSaveObject || !saveObject) return
    setSaveObject({
      ...saveObject,
      [nomKeySave]: Number(value)
    })
  }

  return (
    <div className={Style.contentRadios}>
      <p>El ticket tiene solución:</p>
      <Radio label='Si' name='indCerrado' value={1} onChange={onChange} />
      <Radio label='No' name='indCerrado' value={0} onChange={onChange} />
    </div>
  )
}
