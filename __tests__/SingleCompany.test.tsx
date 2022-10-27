import { describe, it, afterEach, vi } from 'vitest'
import { cleanup, screen } from '@testing-library/react'
import { render } from './test-utils'
import SingleCompanyPage from '@/pages/companies/[id]'

describe('SingleCompanyPage', () => {
  afterEach(cleanup)

  vi.mock('next/router', () => ({
    useRouter: () => ({
      query: {
        id: '1'
      }
    })
  }))

  it('should render the SingleCompanyPage', () => {
    render(
      <SingleCompanyPage />)
  })

  it('should render the SingleCompanyPage HeadBanner correctly', () => {
    render(<SingleCompanyPage />)
    screen.getByTestId('head-banner-image')
  })
})
