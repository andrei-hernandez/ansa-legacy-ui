import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { MainLayout } from "@/components/shared/layout"
import { CompanyGrid } from "@/components/Companies"
import { COMPANIES_MOCK_DATA } from "@/utils/mockData/companies"

import { ICompany } from "@/types/Company"

const Home: NextPage = () => {

  const [data, setData] = useState<Array<ICompany> | undefined>(undefined)

  useEffect(() => {
    setTimeout(() => {
      setData(COMPANIES_MOCK_DATA
      )
    }, 60)
  }, [])

  return (
    <MainLayout>
      <div className="main-page-container">
        <CompanyGrid data={data ?? []} />
      </div>
    </MainLayout>
  )
}

export default Home
