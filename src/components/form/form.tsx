'use client'
import Input from '@/components/Input/input'
import Style from './form.module.css'
import Button from '@/components/button/button'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { toast } from 'sonner'
import loginService from '@/app/services/loginService'
import Usuario, { loginRequestType } from '@/backend/models/Usuario'
import { SuccessResponse } from '@/backend/models/responseTypes'
import PopText from '@/components/popText/popText'
import { useRouter } from 'next/navigation'
import cookie from 'js-cookie'
import { UserContext } from '@/app/userContext'
import MyIcon from '../myIcon/myIcon'

type formDataType = [['emailUsuario', string], ['password', string]]
type formErrorInput = { emailUsuario: boolean, password: boolean }

export default function Form () {
  const { setUser, setToken } = useContext(UserContext)
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)
  const [errorInputs, setErrorInputs] = useState<formErrorInput>({
    emailUsuario: false,
    password: false
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault()
    const errorInputsValues = { emailUsuario: false, password: false }
    const formData = new FormData(e.currentTarget) as unknown as formDataType
    const data = Object.fromEntries(formData)
    const { emailUsuario, password } = data as unknown as loginRequestType

    if (!emailUsuario) {
      toast.error('El usuario es requerido')
      errorInputsValues.emailUsuario = true
    }
    if (!password || password.length < 3) {
      toast.error('La contraseña es requerida y debe ser mayor a 3 caracteres')
      errorInputsValues.password = true
    }

    if (!emailUsuario || !password || password.length < 3) {
      setErrorInputs(errorInputsValues)
      return
    }

    const isDocument = !isNaN(Number(emailUsuario))
    const isEmail = emailUsuario.includes('@')
    if ((!isDocument && !isEmail) || emailUsuario.length < 6) {
      setErrorInputs(errorInputsValues)
      toast.error('El usuario debe ser un correo o un documento')
      errorInputsValues.emailUsuario = true
      return
    }
    setErrorInputs(errorInputsValues)
    setLoading(true)
    const credentials = isDocument ? { numDocumento: emailUsuario } : { emailUsuario }
    toast.promise(loginService({ ...credentials, password }), {
      success: (dataResponse: SuccessResponse) => {
        console.log(dataResponse)
        const userLoged = new Usuario(dataResponse.data.user)
        const token = dataResponse.data.token
        localStorage.setItem('token', JSON.stringify(token))
        console.log(userLoged)
        cookie.set('token', token)
        localStorage.setItem('user', JSON.stringify(userLoged))
        localStorage.setItem('token', token)
        setUser(userLoged)
        setToken(token)
        router.push('/home', { scroll: false })
        console.log('redireccionando')
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
        <Input label='Usuario' name='emailUsuario' errorInput={errorInputs.emailUsuario} icon='ic:baseline-account-box' disabled={loading} />
        <Input label='Contraseña' name='password' errorInput={errorInputs.password} type='password' icon='ic:round-password' disabled={loading} />
        <PopText popText='Recuperar contraseña' position='right'><Link href='/' className={Style.link}>Olvidaste tu contraseña?</Link></PopText>
        <Button fullContent type='submit'>
          Ingresar
          <MyIcon icon='ic:baseline-arrow-forward' id='iconMove' />
        </Button>
      </form>
    </>
  )
}
