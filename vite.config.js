import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project-site path. Keep this in sync with the repository name.
  base: '/verdant-wellness-store/',
})
