import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

const r = (p: string): string => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@': r('.')
}

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [r('setup/setup.ts')]
  },
  resolve: {
    alias
  }
})
