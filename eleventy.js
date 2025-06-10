module.exports = function(eleventyConfig) {
  // Dodajemy filtr
  eleventyConfig.addFilter("uppercase", function(value) {
    return value.toUpperCase();
  });
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