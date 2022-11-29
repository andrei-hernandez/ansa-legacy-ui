import { describe, it, afterEach, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import SingleCompanyPage from '@/pages/companies/[companyType]/[id]'
import { ICompany } from '@/types/Company'

describe('SingleCompanyPage', () => {
  afterEach(cleanup)

  vi.mock('next/router', () => ({
    useRouter: () => ({
      query: {
        id: '1'
      }
    })
  }))

  const mockData: ICompany = {
    id: 3,
    name: 'Company 3',
    address: 'Address 3',
    categories: ['Category 1', 'Category 2', 'Category 3'],
    banner: 'https://via.placeholder.com/150',
    companyType: 'default',
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
    topProducts: [
      {
        id: '1',
        name: 'product1',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        categories: ['Category1', 'Category2'],
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate tenetur dolore quisquam tempora quo aliquid voluptatibus! Vel ad architecto labore assumenda quasi ipsam magni accusantium molestias. Necessitatibus, explicabo voluptatum.'
      }
    ]
  }

  it('should render the SingleCompanyPage', () => {
    render(
      <SingleCompanyPage singleCompanyData={mockData} />)
  })
})
