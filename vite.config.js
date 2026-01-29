import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Default is 'assets', not a custom directory
    outDir: 'dist', // Default output directory
  }
})
