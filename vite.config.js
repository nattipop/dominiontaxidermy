import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: "dominion-taxidermy-wi-ec92e7c89fac.herokuapp.com"
  }
})
