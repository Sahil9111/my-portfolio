import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2000, // in KB, e.g., 2000 KB = 2 MB
  },
  plugins: [react()],
})
