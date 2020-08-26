const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addFilter('getkeys',function(object){
    if(Object.prototype.toString.call( object ) === '[object Array]')
    for (var i = object.length - 1; i >= 0; i--) {
        return Object.keys(object[i])
    }else{
        return Object.keys(object)
    };
})
  return {
      addPassthroughCopy :true,
      dir :{
          input :"src",
          output:"dist",
          includes: "_includes"
      },
      templateFormats : ["html","md","css","png","liquid"],
      htmlTemplateEngine : "liquid",
      markdownTemplateEngine :  "liquid",
      pathPrefix: "/eleventy-ux-tool-doc/"
  }
};