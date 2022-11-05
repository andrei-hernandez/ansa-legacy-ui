import type { Variants } from 'framer-motion'

export function fadeInOut (type = 'easeInOut', duration = 0.3): Variants {
  return {
    enter: {
      opacity: 1,
      scale: 1,
      transition: { type, duration }
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: { type, duration }
    }
  }
}
