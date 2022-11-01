import { FunctionComponent } from 'react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import { Map } from './Map'
import { Marker } from './Marker'

interface IMapComponentProps {
  markers?: Array<{ lat: number, lon: number }>
}

const render = (status: Status): JSX.Element => {
  return <h1>{status}</h1>
}

export const MapComponent: FunctionComponent<IMapComponentProps> = (): JSX.Element => {
  const cords = {
    lat: 19.439890549537136,
    lng: -99.20333691844232
  }

  const apiKey = 'AIzaSyD4K3BbP5zgAERDf-CgKK5s1lpXbuFJDIM'

  return (
    <div className="map-component">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          center={cords}
          zoom={18}
          style={{ flexGrow: '1', height: '100%', width: '100%' }}>
          <Marker position={cords} />
        </Map>
      </Wrapper>
    </div>
  )
}
