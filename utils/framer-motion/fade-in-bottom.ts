import type { Variants } from 'framer-motion'

export function fadeInBottom (type = 'spring', duration = 0.5): Variants {
  return {
    enter: {
      y: 0,
      opacity: 1,
      transition: { type, duration }
    },
    exit: {
      y: 80,
      opacity: 0,
      transition: { type, duration }
    }
  }
}

export function fadeInBottomWithScaleX (
  type = 'spring',
  duration = 0.5
): Variants {
  return {
    enter: {
      y: 0,
      scaleX: 1,
      opacity: 1,
      transition: { type, duration }
    },
    exit: {
      y: 80,
      scaleX: 0.7,
      opacity: 0,
      transition: { type, duration }
    }
  }
}

export function fadeInBottomWithScaleY (
  type = 'easeInOut',
  duration = 0.4,
  delay = 0.05
): Variants {
  return {
    enter: {
      y: 0,
      scaleY: 1,
      opacity: 1,
      transition: { type, duration, delay }
    },
    exit: {
      y: '100%',
      scaleY: 0,
      opacity: 0,
      transition: { type, duration, delay }
    }
  }
}
