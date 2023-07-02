import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'


// https://vitejs.dev/config/
// ? configuring Network hosting with Vite: (see forum for correct vite command)
//// ? https://github.com/vitejs/vite/discussions/3396
// ? it must be npm run dev -- --host OR vite --host 

// const BASE_URL = import.meta.env.BASE_URL || '';
// ! Careful: cannot access env variables outsice src folder by default! (check online for workaround)

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

//! env variables configuration: https://vitejs.dev/config/#config-intellisense
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

//tried adding optimizeDeps and resolve coming from here:
//https://stackoverflow.com/questions/73036803/uncaught-typeerror-https-agent-is-not-a-constructor
/* removed
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        GlobalsPolyfills({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      stream: 'stream-browserify',
      https: 'agent-base', 
      // comment above line and uncomment below line if it doesnot work
      //     http:'agent-base',
    },
  },
*/