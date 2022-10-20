import { AxiosResponse } from "axios"
import { IRestResponse } from "@/types/RestServices"

export interface IAxiosRestServicesReturns<T> {
  Get: IAxiosRestFunction<T>
  Post: IAxiosRestFunctionWithData<T>
  Put: IAxiosRestFunctionWithData<T>
  Delete: IAxiosRestFunction<T>
}

export interface IAxiosRestFunction<T> {
  <T> (): Promise<AxiosResponse<IRestResponse<T>>>
}

export interface IAxiosRestFunctionWithData<T> {
  <T> (data: T): Promise<AxiosResponse<IRestResponse<T>, any>>
}