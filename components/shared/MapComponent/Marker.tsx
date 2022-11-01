import { useEffect, useState, FunctionComponent } from 'react'

export const Marker: FunctionComponent<google.maps.MarkerOptions> = options => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    if (!(Boolean(marker))) {
      setMarker(new google.maps.Marker())
    }

    // remove marker from map on unmount
    return () => {
      if (Boolean(marker)) {
        marker?.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (Boolean(marker)) {
      marker?.setOptions(options)
    }
  }, [marker, options])

  return null
}
