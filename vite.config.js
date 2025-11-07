import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const postsDir = path.resolve(__dirname, 'src/projekty')

let postFiles = {};
if (fs.existsSync(postsDir)) {
  const subdirs = fs.readdirSync(postsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  postFiles = subdirs.reduce((inputs, dirName) => {
    const filePath = path.resolve(postsDir, dirName, "index.html");
    if (fs.existsSync(filePath)) {
      // Klucz musi być unikalny – np. "post-nazwa"
      inputs[`post-${dirName}`] = filePath;
    }
    return inputs;
  }, {});
}

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        ...postFiles
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