import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    outDir:    'dist',
    sourcemap: false,
    // Increase chunk size warning limit — single-file app is intentionally large
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  server: {
    port: 5173,
    // Proxy API calls to backend during local development
    proxy: {
      '/api': {
        target:       'http://localhost:8080',
        changeOrigin: true,
        secure:       false,
      },
    },
  },

  preview: {
    port: 4173,
  },
})
