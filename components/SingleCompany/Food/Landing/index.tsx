import React, { FunctionComponent } from 'react'
import { HeadBanner } from '../../SharedSections/HeadBanner'
import { Row, Col } from 'antd'
import { AboutUs } from '../../SharedSections/AboutUs'
import { Location } from '../../SharedSections/Location'
import { ContactForm } from '../../SharedSections/ContactForm'

import { ICompany } from '@/types/Company'
import { motion } from 'framer-motion'
import { staggerTransitionChild, staggerTransitionParent } from '@/utils/framer-motion/stagger-transition'
import { Gallery } from '../../SharedSections/Gallery'
import { TopProducts } from '../../SharedSections/TopProducts'

interface IFoodCompanyLandingProps {
  singleCompanyData: ICompany
}

export const FoodCompanyLanding: FunctionComponent<IFoodCompanyLandingProps> = ({ singleCompanyData }): JSX.Element => {
  return (
    <div className="single-company-landing">
      <HeadBanner
        imageSrc={singleCompanyData?.banner}
        companyName={singleCompanyData?.name} />
      <motion.div
        initial="exit"
        animate="enter"
        variants={staggerTransitionParent(0.025)}>
        <Row
          justify="center"
          align="middle"
          className="single-company-landing-content">
          <Col xs={24} xxl={16}>
            <motion.div variants={staggerTransitionChild()}>
              <AboutUs />
            </motion.div>
          </Col>
          <Col xs={24} xxl={16}>
            <motion.div variants={staggerTransitionChild()}>
              <Gallery />
            </motion.div>
          </Col>
          <Col xs={24} xxl={16}>
            <motion.div variants={staggerTransitionChild()}>
              <TopProducts
                companyTopProducts={singleCompanyData.topProducts} />
            </motion.div>
          </Col>
          <Col xs={24} xxl={16}>
            <motion.div variants={staggerTransitionChild()}>
              <Location
                companyAddress={singleCompanyData?.address}
                companyLocation={singleCompanyData.companyLocation.cords}
                companyMapMarkers={singleCompanyData.companyLocation.markers} />
            </motion.div>
          </Col>
          <Col xs={24} xxl={16}>
            <motion.div variants={staggerTransitionChild()}>
              <ContactForm />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  )
}

export default FoodCompanyLanding
