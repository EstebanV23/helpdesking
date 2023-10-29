import { NextApiResponse } from 'next'

interface BasicResponse {
  status: number
  message: string
  response?: (res: NextApiResponse) => void
}

interface SuccessResponse extends BasicResponse {
  data: any
}

interface ErrorResponse extends BasicResponse {
  error: string
  unknownError?: unknown
}

export type { BasicResponse, SuccessResponse, ErrorResponse }
