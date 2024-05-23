const dateFilter = require('nunjucks-date-filter');

module.exports = function(eleventyConfig) {
  // Register the date filter
  eleventyConfig.addNunjucksFilter("date", dateFilter);

  // Add a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Copy the `css` directory to the output `_site` directory
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
