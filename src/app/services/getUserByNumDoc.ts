import { baseUrl } from '../cons/baseUrl'

export default function getUserByNumDoc ({ token, numDocumento }: { token: string, numDocumento: string }) {
  console.log({ numDocumento })
  return fetch(`${baseUrl}/user/getByNumDocumento`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ numDocumento })
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error)
      return { error }
    })
}
