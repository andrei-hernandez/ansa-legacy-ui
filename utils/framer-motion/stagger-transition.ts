import type { Variants } from 'framer-motion'

export function staggerTransitionParent (staggerChildren = 0.05, delayChildren = 0.02, staggerDirection = -1): Variants {
  return {
    enter: {
      transition: { staggerChildren, delayChildren }
    },
    exit: {
      transition: { staggerChildren, staggerDirection }
    }
  }
}

export function staggerTransitionChild (): Variants {
  return {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }
}
