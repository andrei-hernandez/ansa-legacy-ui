import React, { FunctionComponent, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'

const AllTheProviders: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider
      baseUrl="http://localhost:4000"
      basePath="http://localhost:4000">
      {children}
    </SessionProvider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { customRender as render }
