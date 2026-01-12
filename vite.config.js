
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/AIPortfolio/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
