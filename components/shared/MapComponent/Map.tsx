/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  useRef,
  useState,
  Children,
  useEffect,
  ReactNode,
  cloneElement,
  isValidElement,
  FunctionComponent
} from 'react'
import { useDeepCompareEffectForMaps } from './hooks'

interface IMapProps extends google.maps.MapOptions {
  style: { [key: string]: string }
  children?: ReactNode
}

export const Map: FunctionComponent<IMapProps> = ({
  children,
  style,
  ...options
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if ((ref.current != null) && !(Boolean(map))) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  useDeepCompareEffectForMaps(() => {
    if (Boolean(map)) {
      map?.setOptions(options)
    }
  }, [map, options])

  return (
    <>
      <div ref={ref} style={style} />
      {Children.map(children, child => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-expect-error
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}
