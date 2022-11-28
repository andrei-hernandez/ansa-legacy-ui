import { SectionSkeleton } from '@/components/shared/SectionSkeleton'
import { FunctionComponent } from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'
import banner1 from '@/assets/mockImages/banner1.jpg'
import banner2 from '@/assets/mockImages/banner2.jpg'
import banner3 from '@/assets/mockImages/banner3.jpg'

export const Gallery: FunctionComponent = () => {
  return (
    <SectionSkeleton title="Gallery">
      <Carousel autoplay>
        <Image src={banner1} alt="banner1" />
        <Image src={banner2} alt="banner2" />
        <Image src={banner3} alt="banner3" />
      </Carousel>
    </SectionSkeleton>
  )
}
