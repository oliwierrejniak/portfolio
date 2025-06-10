module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/assets");

  // Ustawiamy foldery
  return {
    dir: {
      input: "src",       // skąd pobierasz pliki
      output: "dist",     // gdzie ląduje zbudowany projekt
      includes: "layouts"// gdzie trzymasz części szablonów
    }
  };
};