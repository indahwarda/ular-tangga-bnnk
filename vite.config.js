import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: false, // matikan overlay error
      port: 24678, // hindari konflik port HMR
    },
  },
  optimizeDeps: {
    force: true, // paksa scan ulang dependency
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
