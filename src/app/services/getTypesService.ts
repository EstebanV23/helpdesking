import { baseUrl } from '../cons/baseUrl'

export default function getTypesService ({ token }: { token: string }) {
  return fetch(`${baseUrl}/tipo-sol/getAll`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error)
      return { error }
    })
}
