import TxtArea from '../txtArea/txtArea'

export default function TicketSolici ({ text }: { text?: string }) {
  return (
    <TxtArea labelText='Solicitud' disabled={Boolean(text)}>
      {text}
    </TxtArea>
  )
}
