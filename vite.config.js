import { defineConfig } from 'vite';
import path from 'path'; 

export default defineConfig({
  root: "src",                  // punkt wejścia dla Vite
  build: {
    outDir: path.resolve(__dirname, 'dist/assets'),  // wrzucamy bundle do podfolderu _site
    emptyOutDir: true,          // czyści assets przed buildem
    rollupOptions: {
      input: path.resolve(__dirname, 'src/js/main.js'), // entry point
    }
  }
});