module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("resources", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/resources/**/*.md");
  });

  // ✅ Return your directory settings (keep as is)
  return {
    dir: { 
      input: "src",
      output: "dist"
    }
  };
};
