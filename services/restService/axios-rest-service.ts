import { IAxiosRestServicesReturns } from "@/types/AxiosRestService"
import { IRestResponse } from "@/types/RestServices"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const AxiosRestService = <T> (url: string, config: AxiosRequestConfig): IAxiosRestServicesReturns<T> => {

  const Get = async<T> (): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.get<IRestResponse<T>>(url, config)
  }

  const Post = async<T> (data: T): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.post<IRestResponse<T>>(url, data, config)
  }

  const Put = async<T> (data: T): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.put<IRestResponse<T>>(url, data, config)
  }

  const Delete = async<T> (): Promise<AxiosResponse<IRestResponse<T>>> => {
    return await axios.delete<IRestResponse<T>>(url, config)
  }

  return {
    Get,
    Post,
    Put,
    Delete
  }
}
