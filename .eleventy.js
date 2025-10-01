export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "dist": "assets" });

  return {
    dir: {
      input: "content",
      output: "src",
      includes: "includes",
      layouts: "layouts"
    },
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}