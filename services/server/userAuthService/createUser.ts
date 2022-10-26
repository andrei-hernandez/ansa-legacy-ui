import { ICreateAccountData, ICreateAccountResponse } from '@/types/Auth'
import { IGenericRestService } from '@/types/RestServices'

interface ICreateUserServiceHandlerReturns {
  createUser: (data: ICreateAccountData) => Promise<ICreateAccountResponse>
}

export const ServiceHandler = (httpService: IGenericRestService): ICreateUserServiceHandlerReturns => ({

  createUser: async (createUserData: ICreateAccountData): Promise<ICreateAccountResponse> => {
    const response: ICreateAccountResponse =
      await httpService.Post('/auth/register', createUserData, {})
    return response
  }
})

export default ServiceHandler
