import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// ? configuring Network hosting with Vite: (see forum for correct vite command)
//// ? https://github.com/vitejs/vite/discussions/3396
// ? it must be npm run dev -- --host OR vite --host 

const ASSET_URL = process.env.ASSET_URL || '';

//learned from https://vitejs.dev/config/#conditional-config
//https://stackoverflow.com/questions/68076527/how-to-set-vite-config-js-base-public-path
//! not used; will leave here for future reference
/*
export default defineConfig(({command,serve,ssrBuild}) => {
  if(command==="serve"){ // or dev

  }
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
*/

export default defineConfig({
  plugins: [vue()],
  // base: '/dist/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
