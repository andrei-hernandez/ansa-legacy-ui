import { FunctionComponent } from 'react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import { Map } from './Map'
import { Marker } from './Marker'

interface IMapComponentProps {
  center: { lat: number, lng: number }
  markers?: Array<{ lat: number, lng: number }>
}

const render = (status: Status): JSX.Element => {
  return <h1>{status}</h1>
}

export const MapComponent: FunctionComponent<IMapComponentProps> = ({ center, markers }): JSX.Element => {
  const apiKey = 'AIzaSyD4K3BbP5zgAERDf-CgKK5s1lpXbuFJDIM'

  return (
    <div className="map-component">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          center={center}
          zoom={18}
          style={{ flexGrow: '1', height: '100%', width: '100%' }}>
          {markers?.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </Map>
      </Wrapper>
    </div>
  )
}
