import React, { FunctionComponent } from 'react'
import { HeadBanner } from '../../SharedSections/HeadBanner'

import { ICompany } from '@/types/Company'
import { Row, Col, Grid } from 'antd'
import { AboutUs } from '../../SharedSections/AboutUs'
import { Location } from '../../SharedSections/Location'
import { Breakpoint } from 'antd/lib/_util/responsiveObserve'

interface IFoodCompanyLandingProps {
  singleCompanyData: ICompany
}

const useReactiveColSize = (screens: Partial<Record<Breakpoint, boolean>>): number => {
  if (screens.lg === true || screens.xl === true || screens.xxl === true) {
    return 16
  }

  return 24
}

export const FoodCompanyLanding: FunctionComponent<IFoodCompanyLandingProps> = ({ singleCompanyData }): JSX.Element => {
  const screens = Grid.useBreakpoint()

  return (
    <div className="single-company-landing">
      <HeadBanner
        imageSrc={singleCompanyData?.banner}
        companyName={singleCompanyData?.name} />
      <Row
        className="single-company-landing-content"
        justify="center">
        <Col span={useReactiveColSize(screens)}>
          <AboutUs />
        </Col>
        <Col span={useReactiveColSize(screens)}>
          <Location
            companyAddress={singleCompanyData?.address}
            companyLocation={singleCompanyData.companyLocation.cords}
            companyMapMarkers={singleCompanyData.companyLocation.markers} />
        </Col>
      </Row>
    </div>
  )
}

export default FoodCompanyLanding
