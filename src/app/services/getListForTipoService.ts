import { baseUrl } from '../cons/baseUrl'

export default function getListForTipoService ({ token, idTipoList }: { token: string, idTipoList: number }) {
  return fetch(`${baseUrl}/lista/getForTipo/${idTipoList}`, {
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
