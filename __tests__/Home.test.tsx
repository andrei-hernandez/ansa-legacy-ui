import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../pages'

test('home', () => {
  render(<Home />)
  const main = within(screen.getByTestId('homepage-container'))
  expect(
    main.getByRole('header', { level: 1, name: /welcome to next\.js!/i })
  ).toBeDefined()

  const footer = within(screen.getByRole('contentinfo'))
  const link = within(footer.getByRole('link'))
  expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined()
})
