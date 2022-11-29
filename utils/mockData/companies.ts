import banner1 from '@/assets/mockImages/banner1.jpg'
import banner2 from '@/assets/mockImages/banner2.jpg'
import banner3 from '@/assets/mockImages/banner3.jpg'

import { ICompany } from '@/types/Company'
import { IProduct } from '@/types/Product'

const productsMock: Array<IProduct> = [
  {
    id: '1',
    name: 'product1',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    categories: ['Category1', 'Category2'],
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate tenetur dolore quisquam tempora quo aliquid voluptatibus! Vel ad architecto labore assumenda quasi ipsam magni accusantium molestias. Necessitatibus, explicabo voluptatum.'
  },
  {
    id: '2',
    name: 'product2',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    categories: ['Category1'],
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate tenetur dolore quisquam tempora quo aliquid voluptatibus! Vel ad architecto labore assumenda quasi ipsam magni accusantium molestias. Necessitatibus, explicabo voluptatum.'
  },
  {
    id: '3',
    name: 'product3',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    categories: ['Category1', 'Category2', 'Category3'],
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate tenetur dolore quisquam tempora quo aliquid voluptatibus! Vel ad architecto labore assumenda quasi ipsam magni accusantium molestias. Necessitatibus, explicabo voluptatum.'
  }
]

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
    },
    topProducts: productsMock
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
    },
    topProducts: productsMock
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
    },
    topProducts: productsMock
  }
]
