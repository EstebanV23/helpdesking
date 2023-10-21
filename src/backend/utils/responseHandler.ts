import { ErrorResponse, SuccessResponse } from '@/backend/interfaceModels/responseTypes'
import { NextApiResponse } from 'next'

class SuccessResponseHandler implements SuccessResponse {
  status: number
  message: string
  data: any

  constructor (params: SuccessResponse) {
    this.status = params.status
    this.message = params.message
    this.data = params.data
  }

  response (res: NextApiResponse) {
    res.status(this.status).json({
      message: this.message,
      data: this.data
    })
  }
}

class ErrorResponseHandler implements ErrorResponse {
  status: number
  message: string
  error: string

  constructor (params: ErrorResponse) {
    this.status = params.status
    this.message = params.message
    this.error = params.error
  }

  response (res: NextApiResponse) {
    res.status(this.status).json({
      message: this.message,
      error: this.error
    })
  }
}

export { SuccessResponseHandler, ErrorResponseHandler }
