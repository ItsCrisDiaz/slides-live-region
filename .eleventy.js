const { EleventyRenderPlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Sincronizar CSS
  eleventyConfig.setBrowserSyncConfig({
    files: ["public/*.css"],
  });
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Export assets and HTML files (to redirect)
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/styles.css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
