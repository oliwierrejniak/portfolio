import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
export default function (eleventyConfig) {
  
eleventyConfig.addPassthroughCopy({ "src/js": "js" });
eleventyConfig.addPassthroughCopy({ "src/css": "css" });
eleventyConfig.addPassthroughCopy({ "src/media": "media" });
eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      root: ".11ty-vite",
      build: {
        outDir: "../_site",
        emptyOutDir: true,
      },
      server: {
        port: 8080,
        strictPort: true,
        watch: {
          usePolling: true,
        },
      },
    }
  });

  // Ustawiamy foldery
  return {
    dir: {
      input: "src",       // skąd pobierasz pliki
      output: "dist",     // gdzie ląduje zbudowany projekt
      includes: "layouts"// gdzie trzymasz części szablonów
    },
    htmlTemplateEngine: "njk"
  };
};