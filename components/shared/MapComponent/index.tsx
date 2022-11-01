import React, { FunctionComponent } from 'react'
import GoogleMapReact from 'google-map-react'
import { Popover } from 'antd'

interface IMapComponentProps {
  markers?: Array<{ lat: number, lon: number }>
}

export const MapComponent: FunctionComponent<IMapComponentProps> = (): JSX.Element => {
  return (
    <div className="map-component">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD4K3BbP5zgAERDf-CgKK5s1lpXbuFJDIM' }}
        defaultCenter={{ lat: 19.44050706507404, lng: -99.20163438643141 }}
        defaultZoom={15}>
        <MapMarkerComponent
          lat={19.44050706507404}
          lng={-99.20163438643141}
          text={'This is a marker'} />
      </GoogleMapReact>
    </div>
  )
}

interface IMarkerComponentProps {
  lat: number
  lng: number
  text: string
}

const MapMarkerComponent: FunctionComponent<IMarkerComponentProps> =
  ({ text }) => (
    <Popover content={text}>
      <div className="map-marker">
      </div>
    </Popover>
  )
