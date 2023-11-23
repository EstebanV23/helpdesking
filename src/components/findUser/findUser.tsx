import React, { useEffect } from 'react'
import Input from '../Input/input'
import Modal from '../modal/modal'
import getUserByNumDoc from '@/app/services/getUserByNumDoc'
import Cookies from 'js-cookie'
import Usuario from '@/backend/models/Usuario'
import Skeleton from 'react-loading-skeleton'
import Cargo from '@/backend/models/Cargo'
import Style from './findUser.module.css'

type Props = {
  setUserSelected: React.Dispatch<React.SetStateAction<any>>
  userSelected: Usuario | null
  className?: string
}

export default function FindUser ({ setUserSelected, userSelected, className }: Props) {
  console.log({ userSelected })
  const [open, setOpen] = React.useState(false)
  const [users, setUsers] = React.useState<(Usuario & {hdCargo: Cargo})[] | null>(null)
  const [search, setSearch] = React.useState('')
  const token = Cookies.get('token') as string

  useEffect(() => {
    console.log({ search })
    getUserByNumDoc({ token, numDocumento: search })
      .then(data => {
        console.log({ data })
        setUsers(data.data)
      })
  }, [search, token])

  return (
    <div className={className}>
      <Input
        label='Usuario registra'
        name='idUsuarioRegistra'
        type='text'
        value={userSelected?.numDocumento}
        setValue={setUserSelected}
        disabled
        placeholder='Presione para buscar usuario'
        onClick={(e) => {
          e.preventDefault()
          console.log('click')
          setOpen(true)
        }}
      />
      <Modal open={open} setOpen={setOpen}>
        <Input label='' name='' icon='tabler:search' value={search} setValue={setSearch} />
        {
          !users || users?.length > 0
            ? (
              <table className={Style.contentUser}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Cargo</th>
                    <th>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      users?.map(user => (
                        <tr
                          key={user.idUsuario}
                          onClick={() => {
                            setUserSelected(user)
                            setOpen(false)
                          }}
                        >
                          <td>{user.nomUsuario}</td>
                          <td>{user.numDocumento}</td>
                          <td>{user.emailUsuario}</td>
                          <td>{user.hdCargo.nomCargo}</td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
              )
            : <div className={Style.skeleton}><Skeleton count={4} /></div>
        }
      </Modal>
    </div>
  )
}
