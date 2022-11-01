import { Card } from 'antd'
import { CardProps } from 'antd/lib/card'
import React, { FunctionComponent } from 'react'

interface ISectionSkeletonProps extends CardProps {
  className?: string
  children: JSX.Element | Array<JSX.Element>
}

export const SectionSkeleton: FunctionComponent<ISectionSkeletonProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <Card
      {...props}
      className={`section-skeleton ${className ?? ''}`}>
      {children}
    </Card>
  )
}
