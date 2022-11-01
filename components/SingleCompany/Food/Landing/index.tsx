import React, { FunctionComponent } from 'react'
import { HeadBanner } from '../../SharedSections/HeadBanner'

import { ICompany } from '@/types/Company'
import { Row, Col } from 'antd'
import { AboutUs } from '../../SharedSections/AboutUs'
import { Location } from '../../SharedSections/Location'

interface IFoodCompanyLandingProps {
  singleCompanyData: ICompany
}

export const FoodCompanyLanding: FunctionComponent<IFoodCompanyLandingProps> = ({ singleCompanyData }): JSX.Element => {
  return (
    <div className="single-company-landing">
      <HeadBanner
        imageSrc={singleCompanyData?.banner}
        companyName={singleCompanyData?.name} />
      <Row>
        <Col span={24}>
          <AboutUs />
        </Col>
        <Col span={24}>
          <Location />
        </Col>
      </Row>
    </div>
  )
}

export default FoodCompanyLanding
