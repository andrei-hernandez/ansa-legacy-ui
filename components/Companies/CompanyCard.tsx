import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { fadeInBottomWithScaleX } from '@/utils/framer-motion/fade-in-bottom'
import { Card, Space, Tag } from 'antd'
import Image from 'next/image'

import { ICompany } from '@/types/Company'
import { useRouter } from 'next/router'

interface ICompanyCardProps {
  company: Partial<ICompany>
}

export const CompanyCard: FunctionComponent<ICompanyCardProps> = ({ company }): JSX.Element => {
  const router = useRouter()

  const handleClickOnCompanyCard = async (): Promise<void> => {
    void router.push(`/companies/${company.companyType ?? 'default'}/${company.id ?? ''}`)
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      variants={fadeInBottomWithScaleX()}>
      <Card
        className="company-card"
        bordered={true}
        onClick={handleClickOnCompanyCard}
        cover={
          <Image
            className="company-card-banner"
            height="180"
            width="587"
            alt={company.name}
            src={company.banner ?? ''} />
        }>
        <Card.Meta title={company.name} description={company.address} />
        <Space
          size={5}
          direction="horizontal"
          className="company-card-categories">
          {company?.categories?.map((category: string): JSX.Element =>
            <Tag color="default" key={category}>{category}</Tag>)}
        </Space>
      </Card>
    </motion.div>
  )
}
