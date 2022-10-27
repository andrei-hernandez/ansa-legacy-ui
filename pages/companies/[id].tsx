import React, { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { COMPANIES_MOCK_DATA } from '@/utils/mockData/companies'
import { HeadBanner } from '@/components/SingleCompany/Landing/HeadBanner'

import { ICompany } from '@/types/Company'

const SingleCompanyPage: FunctionComponent = (): JSX.Element => {
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
      {companyData?.name}
    </div>
  )
}

export default SingleCompanyPage
