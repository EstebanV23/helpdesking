import { baseUrl } from '../cons/baseUrl'

export default function getForFilters ({ token, data }: { token: string, data: Object }) {
  console.log({ data: JSON.stringify({ ...data }) })
  return fetch(`${baseUrl}/ticket/getForFilters`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error)
      return { error }
    })
}
