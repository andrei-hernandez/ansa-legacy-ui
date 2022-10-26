import React, { FunctionComponent } from 'react'
import { Card, Space, Tag } from 'antd'
import Image from 'next/image'

import { ICompany } from '@/types/Company'

interface ICompanyCardProps {
  company: Partial<ICompany>
}

export const CompanyCard: FunctionComponent<ICompanyCardProps> = ({ company }): JSX.Element => {
  return (
    <Card
      className="company-card"
      cover={
        <Image
          className="company-card-banner"
          height="180"
          width="587"
          alt={company.name}
          src={company.banner ?? ''} />
      }>
      <Card.Meta title={company.name} description={company.address} />
      <Space direction="horizontal" className="company-card-categories">
        {company?.categories?.map((category: string): JSX.Element =>
          <Tag color="default" key={category}>{category}</Tag>)}
      </Space>
    </Card>
  )
}
