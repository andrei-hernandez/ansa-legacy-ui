import React, { FunctionComponent } from 'react'
import { HeadBanner } from '../../SharedSections/HeadBanner'
import { Row, Col } from 'antd'
import { AboutUs } from '../../SharedSections/AboutUs'
import { Location } from '../../SharedSections/Location'
import { useReactiveColSize } from '@/hooks/useReactiveColSize'
import { ContactForm } from '../../SharedSections/ContactForm'

import { ICompany } from '@/types/Company'
import { motion } from 'framer-motion'
import { staggerTransition } from '@/utils/framer-motion/stagger-transition'

interface IFoodCompanyLandingProps {
  singleCompanyData: ICompany
}

export const FoodCompanyLanding: FunctionComponent<IFoodCompanyLandingProps> = ({ singleCompanyData }): JSX.Element => {
  const colSizes = {
    desktop: 16,
    mobile: 24,
    default: 24
  }

  return (
    <div className="single-company-landing">
      <HeadBanner
        imageSrc={singleCompanyData?.banner}
        companyName={singleCompanyData?.name} />
      <Row
        className="single-company-landing-content"
        justify="center">
        <motion.div variants={staggerTransition(0.025)}>
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
        </motion.div>
      </Row>
    </div>
  )
}

export default FoodCompanyLanding
