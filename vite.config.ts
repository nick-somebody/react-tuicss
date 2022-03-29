/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "react-tui",
      fileName: (format) => `react-tui.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'react': 'react',
          'react-dom': 'react-dom'
        }
      }
    }
  }
})
