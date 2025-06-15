import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Adjust this base path!
  // If your repo is 'stay-typing.github.io', use base: '/'
  // If your repo is e.g. 'my-portfolio', use base: '/my-portfolio/'
  base: '/', 
})
