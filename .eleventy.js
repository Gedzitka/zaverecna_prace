module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("img");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("scss");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("php");
   
    // ...necháme, co už v konfiguraci je, a přidáme:
    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md"],
      // jako šablonovací jazyk zvolíme Nunjucks`
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
    }
  ;
    