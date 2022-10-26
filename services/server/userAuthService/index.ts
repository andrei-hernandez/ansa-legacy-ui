import CreateUserHandler from './createUser'
import LoginUserHandler from './loginUser'

import {
  ILoginCredentials,
  ICreateAccountData,
  ICreateAccountResponse,
  ILoginCredentialsResponse
} from '@/types/Auth'

interface IAuthServiceReturns {
  createUser: (data: ICreateAccountData) => Promise<ICreateAccountResponse>
  authenticateUser: (data: ILoginCredentials) => Promise<ILoginCredentialsResponse>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthService = (httpService: any): IAuthServiceReturns => {
  return {
    createUser: CreateUserHandler(httpService).createUser,
    authenticateUser: LoginUserHandler(httpService).authenticateUser
  }
}
