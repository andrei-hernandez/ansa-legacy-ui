import React, { FunctionComponent } from 'react'
import { SectionSkeleton } from '@/components/shared/SectionSkeleton'
import { Typography } from 'antd'

export const AboutUs: FunctionComponent = (): JSX.Element => {
  return (
    <SectionSkeleton title="About Us">
      <Typography.Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea nemo, tempore, aliquam provident nobis repellendus animi qui alias soluta itaque dignissimos accusantium voluptates odio commodi fuga saepe error, reiciendis sint quibusdam. Iure fugiat, nisi amet dolor, maxime voluptate quos beatae voluptas odio enim expedita eos aliquid. Maiores hic ut labore voluptatem nemo quam, odio expedita omnis cupiditate sint in tenetur pariatur quisquam excepturi tempore voluptas doloribus obcaecati, sapiente veritatis animi nisi autem! Suscipit excepturi ipsum aut assumenda dolorem, numquam velit explicabo! Aliquid aliquam iusto excepturi explicabo? Dolores incidunt id sequi blanditiis iure, est neque quis eum, amet, nam consequuntur.
      </Typography.Paragraph>
    </SectionSkeleton>
  )
}
