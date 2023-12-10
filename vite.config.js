import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/all-jobs': {
        target: 'https://mern-job-api.vercel.app/',
        // target:'http://localhost:5000',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
