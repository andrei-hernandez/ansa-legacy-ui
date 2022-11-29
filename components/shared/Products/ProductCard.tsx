import { IProduct } from '@/types/Product'
import { fadeInBottomWithScaleX } from '@/utils/framer-motion/fade-in-bottom'
import { Card, Space, Tag } from 'antd'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'

interface IProductCardProps {
  product: IProduct
}

export const ProductCard: FunctionComponent<IProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="product-card"
      whileHover={{ scale: 1.02 }}
      variants={fadeInBottomWithScaleX()}>
      <Card
        bordered={true}
        cover={
          <Image
            height={350}
            width={500}
            objectFit="scale-down"
            objectPosition="top"
            alt={product.name}
            src={product.image ?? ''} />
        }>
        <Card.Meta title={product.name} description={product.comment} />
        <Space
          size={[0, 8]}
          wrap={true}
          direction="horizontal"
          className="product-categories">
          {product?.categories?.map((category: string): JSX.Element =>
            <Tag
              color="default"
              key={category}>
              {category}
            </Tag>)}
        </Space>
      </Card>
    </motion.div>
  )
}
