import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'

interface ILayoutProps {
  children: JSX.Element
}

export const MainLayout: FunctionComponent<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <Layout>
      <Layout.Header>
        This is the header for anysales
      </Layout.Header>
      <Layout>
        {children}
      </Layout>
    </Layout>
  )
}
