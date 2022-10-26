import { describe, it, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import Home from '../pages'

describe('HomePage', () => {
  afterEach(cleanup)

  it('should render the homepage', () => {
    render(<Home />)
  })
})
