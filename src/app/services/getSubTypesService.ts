import { baseUrl } from '../cons/baseUrl'

export default function getSubTypesService ({ token, idTipoSol }: { token: string, idTipoSol: number }) {
  return fetch(`${baseUrl}/sub-tipo-sol/getForTipo/${idTipoSol}`, {
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
