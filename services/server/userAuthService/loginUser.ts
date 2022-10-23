import { IGenericRestService } from "@/types/RestServices"
import { ILoginCredentials, ILoginCredentialsResponse } from "@/types/Auth"

interface ILoginUserServiceHandlerReturns {
  authenticateUser: (data: ILoginCredentials) => Promise<ILoginCredentialsResponse>
}

const ServiceHandler = (httpService: IGenericRestService): ILoginUserServiceHandlerReturns => ({

  authenticateUser: async (loginCredentials: ILoginCredentials): Promise<ILoginCredentialsResponse> => {
    const response: ILoginCredentialsResponse =
      await httpService.Post("/auth/login", loginCredentials, {})
    return response
  }
})

export default ServiceHandler
