import { AxiosResponse, AxiosTransformer } from 'axios'
import { AxiosRuntimeResponse } from '.'

export const axiosTextCsvResponseTransformer: AxiosTransformer = (
  data: any,
  headers?: any
) => {
  // console.log('axiosTextCsvResponseTransformer headers', { ...headers })
  // [].filter(Boolean) removes any empty members
  const lines = (data || '').split('\n').filter(Boolean)
  return lines
}

export const axiosTextCsvResponseHandler = <T>(
  response: AxiosResponse
): AxiosRuntimeResponse => {
  // console.log('axiosTextCsvResponseHandler response', response)

  let responseURL = ''
  if ('request' in response) {
    responseURL =
      'responseURL' in response.request ? response.request.responseURL : ''
  }
  const out: AxiosRuntimeResponse = {
    responseURL,
  }
  if (response.data) {
    const data = response.data
    out.data = data
  }

  // console.log('then', { ...out })
  return out
}
