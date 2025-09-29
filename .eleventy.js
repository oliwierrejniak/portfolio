export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "assets/media": "assets" });
  eleventyConfig.addPassthroughCopy({ "assets/css": "assets" });
  return {
    dir: {
      input: "/",
      output: "dist",
      includes: "includes",
      layouts: "layouts"
    },
    htmlTemplateEngine: "njk"
  };
};