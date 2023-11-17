'use client'

import Usuario from '@/backend/models/Usuario'
import React, { createContext, Dispatch, SetStateAction, useEffect } from 'react'

type props = {
  children: React.ReactNode
}

type contextType = {
  user: Usuario | null,
  token: string | null,
  setUser: Dispatch<SetStateAction<Usuario | null>>,
  setToken: Dispatch<SetStateAction<string | null>>
}

export const UserContext = createContext<contextType>({
  user: null,
  token: null,
  setUser: () => null,
  setToken: () => null
})

export default function UserContextProvider ({ children }: props) {
  const [user, setUser] = React.useState<Usuario | null>(null)
  const [token, setToken] = React.useState<string | null>(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (user) setUser(JSON.parse(user))
    if (token) setToken(token)
  }, [])

  const DEFULT_VALUE = {
    user,
    token,
    setUser,
    setToken
  }
  return (
    <UserContext.Provider value={DEFULT_VALUE}>
      {children}
    </UserContext.Provider>
  )
}
