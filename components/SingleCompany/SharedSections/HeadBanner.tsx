import React, { FunctionComponent } from 'react'
import Image, { StaticImageData } from 'next/image'

interface IHeadBannerProps {
  imageSrc: string | StaticImageData
  companyName?: string
}

export const HeadBanner: FunctionComponent<IHeadBannerProps> = ({ imageSrc, companyName }): JSX.Element => {
  return (
    <div className="head-banner">
      <Image
        data-testid="head-banner-image"
        className="head-banner-image"
        layout="responsive"
        alt={companyName}
        src={imageSrc} />
    </div>
  )
}
