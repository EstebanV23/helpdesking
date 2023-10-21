import bcrypt from 'bcrypt'

type Encrypted = {
  text: string
  hash?: string
}

type Hashed = {
  hash: (data: Encrypted) => Promise<string>
  compare: (data: Encrypted) => Promise<Boolean>
}

const defaultSalt = 10

const bcryptHash: Hashed = {
  hash: async (data: Encrypted): Promise<string> => {
    const salt = await bcrypt.genSalt(defaultSalt)
    const hash:string = await bcrypt.hash(data.text, salt)
    return hash
  },
  compare: async (data: Encrypted): Promise<Boolean> => {
    const result = await bcrypt.compare(data.text, data.hash || '')
    return result
  }
}

export default bcryptHash
