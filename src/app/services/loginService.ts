import { loginRequestType } from '@/backend/models/Usuario'
import { baseUrl } from '../cons/baseUrl'

export default async function loginService (data: loginRequestType) {
  return fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(async (res) => {
      const response = await res.json()
      if (res.status !== 200) throw new Error(response.error)
      return response
    })
    .catch((error) => {
      throw new Error(error.message)
    })
}
