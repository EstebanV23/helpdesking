import { loginRequestType } from '@/backend/models/Usuario'

export default async function loginService (data: loginRequestType) {
  return fetch('/api/auth/login', {
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
}
