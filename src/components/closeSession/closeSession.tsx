'use client'
import React, { useContext } from 'react'
import cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/app/userContext'
import { RedirectButton } from '../redirect/redirect'
import MyIcon from '../myIcon/myIcon'

export default function CloseSession ({ onlyIcon }: { onlyIcon?: boolean}) {
  const navigate = useRouter()
  const { setToken, setUser } = useContext(UserContext)
  const handleClick = () => {
    cookies.remove('token')
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate.push('/login')
  }

  return (
    <RedirectButton
      onClick={handleClick}
      toastType='error'
      msg='Sesión cerrada'
      background='error'
    >
      {onlyIcon ? <MyIcon icon='material-symbols:logout' /> : 'Cerrar sesión'}
    </RedirectButton>
  )
}
