import { describe, it, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import { render } from './test-utils'
import SingleCompanyPage from '@/pages/companies/[companyType]/[id]'

describe('SingleCompanyPage', () => {
  afterEach(cleanup)

  vi.mock('next/router', () => ({
    useRouter: () => ({
      query: {
        id: '1'
      }
    })
  }))

  const mockData = {
    id: 1,
    name: 'Test Company',
    address: 'Test Address',
    categories: ['Test Category'],
    banner: 'https://via.placeholder.com/150',
    companyType: 'food'
  }

  it('should render the SingleCompanyPage', () => {
    render(
      <SingleCompanyPage singleCompanyData={mockData} />)
  })
})
