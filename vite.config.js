import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-cloud-repo/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, 'index.html')
      }
    }
  }
})
