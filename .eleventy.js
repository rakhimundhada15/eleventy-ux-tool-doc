const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
      dir :{
          input :"src",
          output:"dist",
          includes: "_includes"
      },
      templateFormats : ["html","md","css","png"],
      htmlTemplateEngine : "liquid",
      markdownTemplateEngine :  "liquid"
  }
};