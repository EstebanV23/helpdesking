import { ErrorResponse, SuccessResponse } from '@/backend/models/responseTypes'
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
  unknownError?: unknown

  constructor (params: ErrorResponse) {
    this.status = params.status
    this.message = params.message
    this.error = params.error
    this.unknownError = params.unknownError
  }

  response (res: NextApiResponse) {
    res.status(this.status).json({
      message: this.message,
      error: this.error,
      unknownError: this.unknownError
    })
  }
}

export { SuccessResponseHandler, ErrorResponseHandler }
