import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosRuntimeErrorResponse, ErrorData } from '.'

/**
 * Handle Axios Request Errors
 *
 * @param {AxiosError} error
 */
export const axiosRequestCatcher = (
  error: AxiosError
): AxiosRuntimeErrorResponse => {
  const { config = {}, response = {}, message = 'Error' } = error
  const { status = 404, data = {} } = response as AxiosResponse
  const { url, method } = config as AxiosRequestConfig
  const errorText = `${message}, url: ${method} ${url}`

  const errorData: ErrorData = {
    message: errorText,
    ...data,
  }

  const dto: AxiosRuntimeErrorResponse = {
    config,
    data: errorData,
    status,
  }

  return dto
}
