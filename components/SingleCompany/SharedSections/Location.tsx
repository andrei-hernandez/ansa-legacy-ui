import { MapComponent } from '@/components/shared/MapComponent'
import { SectionSkeleton } from '@/components/shared/SectionSkeleton'
import { Typography } from 'antd'
import React, { FunctionComponent } from 'react'

interface ILocationSectionProps {
  companyAddress: string
  companyLocation: { lat: number, lng: number }
  companyMapMarkers?: Array<{ lat: number, lng: number }>
}

export const Location: FunctionComponent<ILocationSectionProps> =
  ({ companyAddress, companyLocation, companyMapMarkers }): JSX.Element => {
    return (
      <SectionSkeleton title="Location" className="location-section">
        <Typography.Title>
          {companyAddress}
        </Typography.Title>
        <MapComponent center={companyLocation} markers={companyMapMarkers} />
      </SectionSkeleton>
    )
  }
