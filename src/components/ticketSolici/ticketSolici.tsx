import React, { useEffect } from 'react'
import TxtArea from '../txtArea/txtArea'

type Props = {
  text: string
  setText?: React.Dispatch<React.SetStateAction<string>>
  saveObject: Object
  setSaveObject?:React.Dispatch<React.SetStateAction<Object>>
   nomKeySave: string
   label?: string
}

export default function TicketSolici ({ nomKeySave, label, saveObject, setSaveObject, text, setText }: Props) {
  const [textValue, setTextValue] = React.useState<string>(text)

  useEffect(() => {
    if (!saveObject || !setSaveObject) return
    setSaveObject({
      ...saveObject,
      [nomKeySave]: textValue as string
    })
  }, [textValue])

  return (
    <TxtArea labelText={label} disabled={Boolean(text)} text={textValue} setText={setTextValue} />
  )
}
