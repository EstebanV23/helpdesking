import * as jose from 'jose'

type PropsCreate = {
  payload: object | string,
  experiesIn?: number
}

const alg = 'HS256'
const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET as string)

async function jwtCreateToken ({ payload, experiesIn = 3600 }: PropsCreate) {
  const payloadValue = new TextEncoder().encode(JSON.stringify(payload))
  const { signatures } = await new jose.GeneralSign(payloadValue).addSignature(secret).setProtectedHeader({ alg, expiresIn: experiesIn }).sign()
  const [signature] = signatures
  return signature.protected + '.' + jose.base64url.encode(payloadValue) + '.' + signature.signature
}

async function jwtVerifyToken (token: string) {
  const { payload } = await jose.jwtVerify(token, secret)
  return payload
}

export { jwtCreateToken, jwtVerifyToken }
