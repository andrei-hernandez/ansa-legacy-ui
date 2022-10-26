import { IRestResponse } from '@/types/RestServices'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AxiosRestService = () => {
  const Get = async<T> (url: string, config: AxiosRequestConfig): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.get<IRestResponse<T>>(url, config)
  }

  const Post = async<T> (url: string, data: T, config: AxiosRequestConfig): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.post<IRestResponse<T>>(url, data, config)
  }

  const Put = async<T> (url: string, data: T, config: AxiosRequestConfig): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.put<IRestResponse<T>>(url, data, config)
  }

  const Delete = async<T> (url: string, config: AxiosRequestConfig): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.delete<IRestResponse<T>>(url, config)
  }

  return {
    Get,
    Post,
    Put,
    Delete
  }
}
