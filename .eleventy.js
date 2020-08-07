const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("assets");
  return {
      addPassthroughCopy :true,
      dir :{
          input :"src",
          output:"dist",
          includes: "_includes"
      },
      templateFormats : ["html","md","css","png","liquid"],
      htmlTemplateEngine : "liquid",
      markdownTemplateEngine :  "liquid"
  }
};