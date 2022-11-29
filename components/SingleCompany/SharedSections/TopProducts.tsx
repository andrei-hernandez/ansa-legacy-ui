import { ProductCard } from '@/components/shared/Products/ProductCard'
import { SectionSkeleton } from '@/components/shared/SectionSkeleton'
import { Col, Row } from 'antd'
import React, { FunctionComponent } from 'react'

import { IProduct } from '@/types/Product'

interface ITopProductsProps {
  companyTopProducts: Array<IProduct>
}

export const TopProducts: FunctionComponent<ITopProductsProps> = ({ companyTopProducts }): JSX.Element => {
  return (
    <SectionSkeleton title="Top Products">
      <div className="top-products-container">
        <Row
          gutter={[30, 30]}
          justify="center"
          className="top-products-grid">
          {companyTopProducts.map((product: IProduct, index) => (
            <Col
              xs={24}
              lg={12}
              xl={12}
              xxl={8}
              key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </SectionSkeleton>
  )
}
