export interface ILoginCredentials {
  id?: string | number
  login: string
  password: string
}

export interface ILoginCredentialsResponse {
  expiresIn: string
  Authorization: string
  data?: ILoginCredentials
}

export interface ICreateAccountData {
  id?: string | number
  name: string
  surname: string
  login: string
  password: string
  role: AccountRole
  createdAt?: string | Date
  updatedAt?: string | Date
}

export interface IAccount {
  id?: string | number
  name: string
  surname: string
  login: string
  password: string
  role: AccountRole
  createdAt?: string | Date
  updatedAt?: string | Date
}

export interface ICreateAccountResponse {
  success: boolean
  message: string
  data?: ICreateAccountData
}

enum AccountRole {
  CLIENT = 'CLIENT',
}
