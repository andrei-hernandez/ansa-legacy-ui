import { IGenericRestService } from '@/types/RestServices'
import { ILoginCredentials, ILoginCredentialsResponse } from '@/types/Auth'

interface ILoginUserServiceHandlerReturns {
  authenticateUser: (data: ILoginCredentials) => Promise<ILoginCredentialsResponse>
}

interface IErrorCode {
  data: {
    statusCode: number
    message: string
  }
}

const ServiceHandler = (httpService: IGenericRestService): ILoginUserServiceHandlerReturns => ({

  authenticateUser: async (loginCredentials: ILoginCredentials): Promise<ILoginCredentialsResponse> => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL

    try {
      return await httpService.Post(`${BASE_URL ?? ''}/auth/login`, loginCredentials, {})
    } catch (error) {
      console.error(error)
      throw new Error((error as IErrorCode)
        .data.statusCode === 401
        ? 'Invalid credentials'
        : 'Something went wrong'
      )
    }
  }
})

export default ServiceHandler
