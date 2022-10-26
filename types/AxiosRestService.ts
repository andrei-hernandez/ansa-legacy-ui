import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IRestResponse } from '@/types/RestServices'

export interface IAxiosRestServicesReturns {
  Get: IAxiosRestFunction
  Post: IAxiosRestFunctionWithData
  Put: IAxiosRestFunctionWithData
  Delete: IAxiosRestFunction
}

export type IAxiosRestFunction = <T> (url: string, config: AxiosRequestConfig) => Promise<AxiosResponse<IRestResponse<T>>>

export type IAxiosRestFunctionWithData = <T> (url: string, data: T, config: AxiosRequestConfig) => Promise<AxiosResponse<IRestResponse<T>, unknown>>
