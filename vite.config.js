import { defineConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, './src').replace(/\\/g, '/')

const DEV_SERVER_PROXY_HOST = 'http://localhost:8080'

export default defineConfig(() => ({
  resolve: {
    alias: {
      '/@': srcPath,
    },
  },
  plugins: [VuePlugin()],
}))
