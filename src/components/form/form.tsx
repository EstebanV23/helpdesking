'use client'
import Input from '@/components/Input/input'
import Style from './form.module.css'
import Button from '@/components/button/button'
import Link from 'next/link'
import React, { useState } from 'react'
import Loader from '../loader/loader'
import { toast } from 'sonner'
import AlertDiv from '../alertDiv/alertDiv'

export default function Form () {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    toast.loading('Cargando...')
    setLoading(true)
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    const loggedUser = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 200) {
          toast.success('Bienvenido')
          return res.json()
        }
        toast.error('Error al iniciar sesion')
        setError(true)
        setMessage('Usuario o contraseña incorrectos')
        return res.json()
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      })
    console.log(loggedUser)
  }
  return (
    <>
      {loading && <Loader />}
      <form className={Style.form} method='POST' onSubmit={handleSubmit}>
        <h3 className={Style.title}>BIENVENIDO</h3>
        <Input label='Usuario' name='emailUsuario' />
        <Input label='Contraseña' name='password' type='password' />
        <Link href='/'>Olvidaste tu contraseña?</Link>
        <AlertDiv active={error} type='info' setActive={setError}>
          {message}
        </AlertDiv>
        <Button type='submit'>
          Ingresar
          <span className='material-symbols-outlined'> arrow_forward</span>
        </Button>
      </form>
    </>
  )
}
