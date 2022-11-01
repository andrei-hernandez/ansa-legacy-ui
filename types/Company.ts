import { StaticImageData } from 'next/image'

export interface ICompany {
  id: number | string
  name: string
  address: string
  categories: Array<string>
  banner: string | StaticImageData
  companyType: string
  companyLocation: ICompanyLocation
}

export interface ICompanyLocation {
  cords: { lat: number, lng: number }
  markers?: Array<{ lat: number, lng: number }>
}

export enum CompanyTypes {
  food = 'food',
}
