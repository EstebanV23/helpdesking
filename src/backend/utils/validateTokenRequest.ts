import Usuario from '../models/Usuario'
import { jwtVerifyToken } from './jwtHandler'

export default async function validateTokenRequest (auth: string | undefined) : Promise<Usuario> {
  if (!auth) throw new Error('No se envio el token')
  const [bearerToken, token]: string[] = auth.split(' ')
  if (bearerToken.toLowerCase() !== 'bearer') throw new Error('El envío del token es incorrecto')
  const userInfo = await jwtVerifyToken(token)
  if (!userInfo.idUsuario) throw new Error('El token no es válido')
  const user = new Usuario({
    idUsuario: userInfo.idUsuario as number,
    nomUsuario: userInfo.nomUsuario as string,
    numDocumento: userInfo.numDocumento as string,
    numTelefono: userInfo.numTelefono as string,
    emailUsuario: userInfo.emailUsuario as string,
    password: ''
  })
  return user
}
