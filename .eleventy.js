module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
eleventyConfig.addPassthroughCopy({ "src/css": "css" });
eleventyConfig.addPassthroughCopy({ "src/media": "media" });

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