/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EffectCallback, Ref, useEffect, useRef } from 'react'
import { createCustomEqual } from 'fast-equals'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'

export const deepCompareEqualsForMaps = createCustomEqual(
  // @ts-expect-error
  deepEqual => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
    }

    // TODO extend to other types

    // use fast-equals for other objects
    // @ts-expect-error
    return deepEqual(a, b)
  }
)

export function useDeepCompareMemoize (value: undefined): Ref<unknown> | undefined {
  const ref = useRef()

  if (!(Boolean(deepCompareEqualsForMaps(value, ref.current)))) {
    ref.current = value
  }

  return ref.current
}

export function useDeepCompareEffectForMaps (
  callback: EffectCallback,
  dependencies: any[]
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}
