import { NextApiResponse, NextApiRequest } from 'next'
import HdUserProvider from '@/provider/HdUserProvider'
import bcryptHash from '@/utils/bcryptHash'
import validateRequest from '@/utils/validation'
import { hdUserCreate } from '@/validationModels/HdUserValidation'
import { requestNewUser } from '@/interfaceModels/UsuarioType'

const userProvider = new HdUserProvider()

export default async function prueba (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await userProvider.getAll()
      res.status(200).json({ users })
    } catch (error) {
      res.status(500).json({ message: error })
      console.log(error)
    }
  }

  if (req.method === 'POST') {
    try {
      const requestType: requestNewUser = req.body
      validateRequest(hdUserCreate, req)
      req.body.password = await bcryptHash.hash({ text: req.body.password })
      const user = await userProvider.create(requestType)
      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ message: error.message })
      console.log(error)
    }
  }
}
