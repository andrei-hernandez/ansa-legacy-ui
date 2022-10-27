import React, { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { COMPANIES_MOCK_DATA } from '@/utils/mockData/companies'
import { HeadBanner } from '../../SharedSections/HeadBanner'

import { ICompany } from '@/types/Company'

export const FoodCompanyLanding: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const [companyData, setCompanyData] = useState<ICompany | undefined | null>(null)
  const companyId = router.query.id as string

  useEffect(() => {
    if (companyId !== '') {
      setTimeout(() => {
        const singleCompany = COMPANIES_MOCK_DATA
          .find(company => company.id === Number(companyId))
        setCompanyData(singleCompany)
      }, 60)
    }
  }, [companyId])

  return (
    <div className="single-company-landing">
      <HeadBanner
        imageSrc={companyData?.banner ?? ''}
        companyName={companyData?.name} />
      This is the landing page for the books company
    </div>
  )
}

export default FoodCompanyLanding
