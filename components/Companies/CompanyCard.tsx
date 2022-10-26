import React, { FunctionComponent } from 'react'
import { Card, List, Tag } from 'antd'
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
      <List
        split={false}
        bordered={false}
        itemLayout="horizontal"
        grid={{ gutter: 8, column: 5 }}
        dataSource={company.categories}
        className="company-card-categories"
        renderItem={
          (category: string): JSX.Element => <List.Item>
            <Tag color="default">{category}</Tag>
          </List.Item>
        } />
    </Card>
  )
}
