/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "./docs"
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./src/test-utils.js"
  }
})
