import { Grid } from 'antd'
import { useMemo } from 'react'

interface IAvailableColSizes {
  mobile: number
  desktop: number
}

/**
 * It returns a number that represents the number of columns in the grid.
 * @returns {AvailableColSizes} The size of the columns in the grid.
 */
export const useReactiveColSize = (AvailableColSizes: IAvailableColSizes): number => {
  if (!Boolean(AvailableColSizes)) {
    throw new Error('You must pass an object with the available sizes for the grid.')
  }
  const screens = Grid.useBreakpoint()
  const memoizedColSize = useMemo(() => {
    if (screens.lg === true || screens.xl === true || screens.xxl === true) {
      return AvailableColSizes.desktop
    }

    return AvailableColSizes.mobile
  }, [screens, AvailableColSizes])

  return memoizedColSize
}
