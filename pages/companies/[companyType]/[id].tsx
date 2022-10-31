/* eslint-disable @typescript-eslint/promise-function-async */
import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { CompanyTypes } from '@/types/Common'
import { GetServerSideProps } from 'next'
import { COMPANIES_MOCK_DATA } from '@/utils/mockData/companies'
import { ICompany } from '@/types/Company'

const FoodLanding = dynamic(() => import('@/components/SingleCompany/Food/Landing'))

interface ISingleCompanyProps {
  singleCompanyData: ICompany
}

const renderModalContent = (companyType: CompanyTypes, componentProps: ISingleCompanyProps): JSX.Element => {
  const companyViews = {
    food: <FoodLanding {...componentProps} />
  }
  return companyViews[companyType] ?? <div>Company Category not found</div>
}

const SingleCompanyPage: FunctionComponent<ISingleCompanyProps> = (props): JSX.Element => {
  const router = useRouter()
  const companyType = router.query.companyType as CompanyTypes

  return (
    <div className="single-company-landing">
      {renderModalContent(companyType, { ...props })}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const companyId = context.params?.id as string
  const companyType = context.params?.companyType as CompanyTypes

  if (companyId.length > 0) {
    const response = COMPANIES_MOCK_DATA
      .find(company => company.id === Number(context?.params?.id ?? 0))

    if (companyType !== response?.companyType) {
      context.res.writeHead(303, {
        Location: `/companies/${response?.companyType ?? ''}/${response?.id ?? ''}`
      })
      context.res.end()
    }

    return {
      props: {
        singleCompanyData: response
      }
    }
  }

  return {
    props: {}
  }
}

export default SingleCompanyPage
