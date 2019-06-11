import { AxiosRequestConfig } from 'axios'

export interface AxiosRuntimeResponse {
  responseURL: string
  data?: any
}

export interface ErrorData {
  message: string
  [key: string]: string
}

export interface AxiosRuntimeErrorResponse {
  config: AxiosRequestConfig
  // tslint:disable-next-line:no-any
  data: ErrorData
  status: number
}

export type HttpRequestMethod = 'GET' | 'PUT' | 'POST'

export interface HttpHeaders {
  [name: string]: string
}
