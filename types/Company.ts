import { StaticImageData } from 'next/image'

export interface ICompany {
  id: number | string
  name: string
  address: string
  categories: Array<string>
  banner: string | StaticImageData
}
