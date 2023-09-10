'use client'
import Input from '@/components/Input/input'
import Style from './form.module.css'
import Button from '@/components/button/button'
import Link from 'next/link'

export default function Form () {
  return (
    <form className={Style.form}>
      <h3 className={Style.title}>BIENVENIDO</h3>
      <Input label='Usuario' name='user' />
      <Input label='Contraseña' name='password' type='password' />
      <Link href='/'>Olvidaste tu contraseña?</Link>
      <Button>
        Ingresar
        <span className='material-symbols-outlined'> arrow_forward</span>
      </Button>
    </form>
  )
}
