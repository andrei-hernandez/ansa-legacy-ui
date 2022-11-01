import { MapComponent } from '@/components/shared/MapComponent'
import { SectionSkeleton } from '@/components/shared/SectionSkeleton'
import React, { FunctionComponent } from 'react'

export const Location: FunctionComponent = (): JSX.Element => {
  return (
    <SectionSkeleton title="Location" className="location-section">
      <MapComponent />
    </SectionSkeleton>
  )
}
