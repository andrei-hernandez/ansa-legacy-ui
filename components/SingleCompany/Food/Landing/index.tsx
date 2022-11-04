import React, { FunctionComponent } from 'react'
import { HeadBanner } from '../../SharedSections/HeadBanner'

import { ICompany } from '@/types/Company'
import { Row, Col } from 'antd'
import { AboutUs } from '../../SharedSections/AboutUs'
import { Location } from '../../SharedSections/Location'
import { useReactiveColSize } from '@/hooks/useReactiveColSize'
import { ContactForm } from '../../SharedSections/ContactForm'

interface IFoodCompanyLandingProps {
  singleCompanyData: ICompany
}

export const FoodCompanyLanding: FunctionComponent<IFoodCompanyLandingProps> = ({ singleCompanyData }): JSX.Element => {
  const colSizes = {
    desktop: 16,
    mobile: 24
  }

  return (
    <div className="single-company-landing">
      <HeadBanner
        imageSrc={singleCompanyData?.banner}
        companyName={singleCompanyData?.name} />
      <Row
        className="single-company-landing-content"
        justify="center">
        <Col span={useReactiveColSize(colSizes)}>
          <AboutUs />
        </Col>
        <Col span={useReactiveColSize(colSizes)}>
          <Location
            companyAddress={singleCompanyData?.address}
            companyLocation={singleCompanyData.companyLocation.cords}
            companyMapMarkers={singleCompanyData.companyLocation.markers} />
        </Col>
        <Col span={useReactiveColSize(colSizes)}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  )
}

export default FoodCompanyLanding
