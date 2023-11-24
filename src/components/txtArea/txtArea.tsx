import React, { useId } from 'react'
import Style from './txtArea.module.css'
import MyIcon from '../myIcon/myIcon'
import { toast } from 'sonner'
import PopText from '../popText/popText'

type Props = {
  props?: React.ReactHTMLElement<HTMLTextAreaElement>
  children?: string
  disabled?: boolean
  labelText?: string
  text?: string
  setText?: React.Dispatch<React.SetStateAction<string>>
}

export default function TxtArea ({ labelText, disabled, text, setText, ...props }: Props) {
  const idTextArea = useId()
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const handleClick = () => {
    if (ref.current) {
      ref.current.select()
      navigator.clipboard.writeText(ref.current.value)
      toast.success('Copiado al portapapeles')
      ref.current.blur()
    }
  }

  return (
    <div className={Style.contentTextareaIcon}>
      <textarea value={text} disabled={disabled} ref={ref} onChange={setText && ((e) => setText(e.target.value))} id={idTextArea} className={Style.textarea} {...props} />
      <label htmlFor={idTextArea} className={Style.labelTextarea}>{labelText}</label>
      <PopText className={Style.icon} popText='Copiar' position='bottom' onClick={handleClick}>
        <MyIcon icon='tabler:clipboard-copy' fontSize={20} />
      </PopText>
    </div>
  )
}
