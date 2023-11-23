'use client'
import React, { useContext } from 'react'
import cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/app/userContext'
import { RedirectButton } from '../redirect/redirect'
import MyIcon from '../myIcon/myIcon'
import PopText from '../popText/popText'

export default function CloseSession ({ onlyIcon, position = 'bottom', fontSize }: { onlyIcon?: boolean, position?: 'top' | 'bottom' | 'left' | 'right', fontSize?: number }) {
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
      {onlyIcon ? <PopText popText='Cerrar sesión' position={position}><MyIcon icon='tabler:logout-2' fontSize={fontSize ?? 15} /></PopText> : 'Cerrar sesión'}
    </RedirectButton>
  )
}
