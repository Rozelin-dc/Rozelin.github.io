import { defineConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, './src').replace(/\\/g, '/')

export default defineConfig(() => ({
  resolve: {
    alias: {
      '/@': srcPath
    }
  },
  server: {
    port: 8080
  },
  publicPath: '/',
  plugins: [VuePlugin()]
}))
