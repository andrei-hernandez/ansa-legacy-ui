import { IAxiosRestServicesReturns } from "@/types/AxiosRestService"
import { IRestResponse } from "@/types/RestServices"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const AxiosRestService = (): IAxiosRestServicesReturns => {

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
