import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/marceee.github.io',
  // build: {
  //   rollupOptions: {
  //     external: ['@rollup/rollup-linux-x64-gnu']
  //   }
  // }
})
