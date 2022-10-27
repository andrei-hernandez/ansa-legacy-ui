/* eslint-disable @typescript-eslint/promise-function-async */
import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { CompanyTypes } from '@/types/Common'
import { GetServerSideProps } from 'next'
import { ICompany } from '@/types/Company'
import { COMPANIES_MOCK_DATA } from '@/utils/mockData/companies'

const FoodLanding = dynamic(() => import('@/components/SingleCompany/Food/Landing'))

const BooksLanding = dynamic(() => import('@/components/SingleCompany/Default/Landing'))

const renderModalContent = (companyType: CompanyTypes): JSX.Element => {
  const companyViews = {
    food: <FoodLanding />,
    books: <BooksLanding />
  }
  return companyViews[companyType] ?? <div>Company Category not found</div>
}

const SingleCompanyPage: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const companyType = router.query.companyType as CompanyTypes

  return (
    <div className="single-company-landing">
      {renderModalContent(companyType)}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ singleCompanyData?: Partial<ICompany | null> }> = async context => {
  const companyId = context.params?.id as string
  const companyType = context.params?.companyType as CompanyTypes

  let singleCompany: ICompany | undefined

  if (companyId.length > 0) {
    const response = COMPANIES_MOCK_DATA
      .find(company => company.id === Number(context?.params?.id ?? 0))
    singleCompany = response

    if (companyType !== response?.companyType) {
      context.res.writeHead(303, {
        Location: `/companies/${response?.companyType ?? ''}/${response?.id ?? ''}`
      })
      context.res.end()
    }
  }

  return {
    props: {
      singleCompanyData: singleCompany ?? null
    }
  }
}

export default SingleCompanyPage
