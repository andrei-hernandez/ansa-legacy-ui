export interface IRestResponse<T> {
  data: T
}

export interface IGenericRestService {
  Get<T> (url: string, config: object): Promise<T>
  Post<T, G> (url: string, data: T, config: object): Promise<G>
  Put<T, G> (url: string, data: T, config: object): Promise<G>
  Delete<T> (url: string, config: object): Promise<T>
}

export interface IGenericRestFunction {
  <T> (): Promise<T>
}
