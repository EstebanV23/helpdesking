'use client'
import Input from '@/components/Input/input'
import Style from './form.module.css'
import Button from '@/components/button/button'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner'
import loginService from '@/app/services/loginService'
import Usuario, { loginRequestType } from '@/backend/models/Usuario'
import { SuccessResponse } from '@/backend/models/responseTypes'
import { isUndefined } from '@/backend/utils/isInstance'
import { resolve } from 'path'

type formDataType = [['emailUsuario', string], ['password', string]]

export default function Form () {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) as unknown as formDataType
    const data = Object.fromEntries(formData)
    const { emailUsuario, password } = data as unknown as loginRequestType
    if (!emailUsuario) {
      toast.error('El usuario es requerido')
      return
    }
    if (!password) {
      toast.error('La contraseña es requerida')
      return
    }
    const isDocument = !isNaN(Number(emailUsuario))
    const isEmail = emailUsuario.includes('@')
    if (!isDocument && !isEmail) {
      toast.error('El usuario debe ser un correo o un documento')
      return
    }
    setLoading(true)
    const credentials = isDocument ? { numDocumento: emailUsuario } : { emailUsuario }
    toast.promise(loginService({ ...credentials, password }), {
      success: (data: SuccessResponse) => {
        console.log(data)
        const userLoged = new Usuario(data.data)
        setLoading(false)
        return `Bienvenido ${userLoged.nomUsuario}`
      },
      error: (err) => {
        console.log(err)
        setLoading(false)
        return err.message
      },
      loading: 'Ingresando...',
      position: 'bottom-center'
    })
  }

  return (
    <>
      <form className={Style.form} method='POST' onSubmit={handleSubmit}>
        <h3 className={Style.title}>BIENVENIDO</h3>
        <Input label='Usuario' name='emailUsuario' icon='ic:baseline-account-box' disabled={loading} />
        <Input label='Contraseña' name='password' type='password' icon='ic:round-password' disabled={loading} />
        <Link href='/' className={Style.link}>Olvidaste tu contraseña?</Link>
        <Button type='submit'>
          Ingresar
          <span className='material-symbols-outlined'> arrow_forward</span>
        </Button>
      </form>
    </>
  )
}
