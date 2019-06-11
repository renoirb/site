import { AxiosTransformer, AxiosRequestConfig } from 'axios'

import {
  HttpHeaders,
  HttpRequestMethod,
  AxiosRuntimeRequestConfigInterface,
} from '.'

/**
 * What parameters to use for an Endpoint.
 *
 * An Endpoint is a method, a path and optionally some
 * other URL properties such as query parameters.
 *
 * An Endpoint can be setup for different purposes and
 * have predetermined HTTP Request headers.
 */
export interface AxiosRuntimeRequestConfigInterface extends AxiosRequestConfig {
  /**
   * HTTP Request headers to use for that data source.
   * See OutgoingHttpHeaders, in Node.js 'http' package.
   *
   * This will be merged on top of the Origin's headers.
   *
   * ```http
   * Accept: text/yaml
   * X-Foo: BAAR
   * ```
   *
   * Resulting as:
   *
   * ```http
   * Host: secret.example.org:9999
   * Accept: text/yaml
   * X-Foo: BAAR
   * ```
   *
   * Should match OutgoingHttpHeaders, in Node.js 'http' package.
   */
  headers: HttpHeaders

  /**
   * HTTP Verb to use.
   * e.g. "GET"
   */
  method: HttpRequestMethod

  path: string

  transformResponse?: AxiosTransformer | AxiosTransformer[]
}

export class RequestConfig implements AxiosRuntimeRequestConfigInterface {
  method: HttpRequestMethod = 'GET'
  url: string = '/example'
  path: string = '/example'
  headers: HttpHeaders = {}

  transformResponse?: AxiosTransformer | AxiosTransformer[]

  addTransformer(value: AxiosTransformer) {
    Object.defineProperty(this, 'transformResponse', {
      enumerable: true,
      value: value.bind(this),
      writable: false,
    })
  }

  setData(data: any): void {
    const value = JSON.parse(JSON.stringify(data))
    Object.defineProperty(this, 'data', {
      enumerable: true,
      value,
      writable: false,
    })
  }

  setParams(data: any): void {
    const value = JSON.parse(JSON.stringify(data))
    Object.defineProperty(this, 'params', {
      enumerable: true,
      value,
      writable: false,
    })
  }
}

export const createAxiosRequestConfig = (
  method: HttpRequestMethod,
  path: string,
  headers: HttpHeaders = {}
): RequestConfig => {
  const prep = new RequestConfig()
  prep.method = method
  prep.url = prep.path = path
  prep.headers = { ...headers }

  return prep
}
