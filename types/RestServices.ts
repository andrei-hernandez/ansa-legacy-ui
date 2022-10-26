
export interface IRestResponse<T> {
  data: T
}

export interface IGenericRestService {
  Get: <T>(url: string, config: object) => Promise<T>
  Post: <T, G>(url: string, data: T, config: object) => Promise<G>
  Put: <T, G>(url: string, data: T, config: object) => Promise<G>
  Delete: <T>(url: string, config: object) => Promise<T>
}

export interface IGenericRestServiceReturns<T> {
  Get: (url: string, config: object) => Promise<T>
  Post: <G>(url: string, data: T, config: object) => Promise<G>
  Put: <G>(url: string, data: T, config: object) => Promise<G>
  Delete: (url: string, config: object) => Promise<T>
}

export type IGenericRestFunction = <T> () => Promise<T>
