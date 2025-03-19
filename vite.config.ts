import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        const HugeLibraries = ["vue3-markdown-it", "ant-design-vue"];
        if (HugeLibraries.some((libName) => id.includes(`node_modules/${libName}`))) {
          return id.toString().split("node_modules/")[1].split("/")[0].toString();
        }
      },
    },
  },
},
})
