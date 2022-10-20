import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { MainLayout } from "@/components/shared/layout"
import { List, Card, Tag } from "antd"
import { COMPANIES_MOCK_DATA } from "@/utils/mockData/companies"

import { ICompany } from "@/types/Company"
import Image from "next/image"

const Home: NextPage = () => {

  const [data, setData] = useState<Array<ICompany> | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setData(COMPANIES_MOCK_DATA)
    }, 60)
  }, []);

  return (
    <MainLayout>
      <div className="main-page-container">
        <List
          grid={{
            gutter: 16,
            column: 3,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          dataSource={data}
          renderItem={(company: ICompany): JSX.Element =>
            <List.Item key={company.id}>
              <Card
                className="company-card"
                cover={
                  <Image
                    className="company-card-banner"
                    alt={company.name}
                    src={company.banner} />
                }>
                <Card.Meta title={company.name} description={company.address} />
                <List
                  split={false}
                  bordered={false}
                  itemLayout="horizontal"
                  grid={{ gutter: 8, column: 5 }}
                  dataSource={company.categories}
                  className="company-card-categories"
                  renderItem={
                    (category: string): JSX.Element => <List.Item>
                      <Tag color="default">{category}</Tag>
                    </List.Item>
                  } />
              </Card>
            </List.Item>
          } />
      </div>
    </MainLayout>
  )
}

export default Home
