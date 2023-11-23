import { baseUrl } from '../cons/baseUrl'

type Props = {
  idUsuario: number
  token: string
}

export default async function ticketsByUser ({ idUsuario, token }: Props) {
  console.log('Fecha de inicio de loginService: ', new Date())
  console.log({ idUsuario })
  return fetch(`${baseUrl}/ticket/byUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ idUsuario })
  })
    .then(async (res) => {
      const response = await res.json()
      console.log({ response })
      if (res.status !== 200) throw new Error(response.error)
      return response
    })
}
