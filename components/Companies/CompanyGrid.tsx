import React, { FunctionComponent } from "react"
import { CompanyCard } from "./CompanyCard"
import { List } from "antd"
import { ListGridType } from "antd/lib/list"

import { ICompany } from "@/types/Company"

interface ICompanyGridProps {
  data: Array<ICompany>
}

export const CompanyGrid: FunctionComponent<ICompanyGridProps> = ({ data }): JSX.Element => {

  const gridSettings: ListGridType = {
    gutter: 16,
    column: 3,
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
    xxl: 3
  }

  return (
    <List
      grid={gridSettings}
      dataSource={data}
      renderItem={(company: ICompany): JSX.Element =>
        <List.Item key={company.id}>
          <CompanyCard company={company} />
        </List.Item>
      } />
  )
}
