import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    allowedHosts: ['dominion-taxidermy-wi-ec92e7c89fac.herokuapp.com', 'www.dominiontaxidermywi.com'],
  }
})
