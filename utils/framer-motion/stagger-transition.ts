import type { Variants } from 'framer-motion'

export function staggerTransition (staggerChildren = 0.05): Variants {
  return {
    enter: {
      transition: { staggerChildren }
    },
    exit: {
      transition: { staggerChildren }
    }
  }
}
