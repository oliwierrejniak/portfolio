import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        kontakt: resolve(__dirname, 'src/kontakt/index.html'),
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "media/*", dest: "media" }
      ]
    })
  ]
});