import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ms-portfolio/',
  // build: {
  //   rollupOptions: {
  //     external: ['@rollup/rollup-linux-x64-gnu']
  //   }
  // }
})
