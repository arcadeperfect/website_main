const dateFilter = require('nunjucks-date-filter');

module.exports = function(eleventyConfig) {
  // Register the date filter
  eleventyConfig.addNunjucksFilter("date", dateFilter);

  // Add a collection for blog posts sorted by custom 'order' field
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  // Copy the `css` directory to the output `_site` directory
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    // pathPrefix: "/website_01/",  // Add your repository name here if it’s a project site

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
