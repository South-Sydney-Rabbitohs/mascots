import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // Served at the domain root (mascots.pages.dev / a subdomain), so assets
  // resolve from '/'. If this site is ever served under a path (e.g.
  // rabbitohs.com.au/mascots), set base to '/mascots/' AND add a matching
  // react-router basename.
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
