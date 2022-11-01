import banner1 from '@/assets/mockImages/banner1.jpg'
import banner2 from '@/assets/mockImages/banner2.jpg'
import banner3 from '@/assets/mockImages/banner3.jpg'

import { ICompany } from '@/types/Company'

export const COMPANIES_MOCK_DATA: Array<ICompany> = [
  {
    id: 1,
    name: 'Company 1',
    address: 'Address 1',
    categories: ['Category 1', 'Category 2'],
    banner: banner1,
    companyType: 'food',
    companyLocation: {
      cords: {
        lat: 19.439890549537136,
        lng: -99.20333691844232
      },
      markers: [
        {
          lat: 19.439890549537136,
          lng: -99.20333691844232
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Company 2',
    address: 'Address 2',
    categories: ['Category 1'],
    banner: banner2,
    companyType: 'food',
    companyLocation: {
      cords: {
        lat: 19.439890549537136,
        lng: -99.20333691844232
      },
      markers: [
        {
          lat: 19.439890549537136,
          lng: -99.20333691844232
        }
      ]
    }
  },
  {
    id: 3,
    name: 'Company 3',
    address: 'Address 3',
    categories: ['Category 1', 'Category 2', 'Category 3'],
    banner: banner3,
    companyType: 'food',
    companyLocation: {
      cords: {
        lat: 19.439890549537136,
        lng: -99.20333691844232
      },
      markers: [
        {
          lat: 19.439890549537136,
          lng: -99.20333691844232
        }
      ]
    }
  }
]
