import { baseUrl } from '../cons/baseUrl'

export default function getOneTicketService ({ token, idTicket }: { token: string, idTicket: string }) {
  return fetch(`${baseUrl}/ticket/getOne/${idTicket}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    },
    cache: 'no-store'
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error)
      return { error }
    })
}
