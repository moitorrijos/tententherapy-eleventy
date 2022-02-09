const sass = require('sass');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCsso = require('postcss-csso');
const fs = require('fs-extra');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./sass/");
  eleventyConfig.on("beforeBuild", () => {
    let result = sass.renderSync({
      file: "sass/main.sass",
      sourceMap: false,
      outputStyle: "compressed",
    });
    console.log("SASS compiled");
  
    // Optimize and write file with PostCSS
    let css = result.css.toString();
    postcss([postcssPresetEnv, postcssCsso])
      .process(css, { from: "main.css", to: "css/main.css" })
      .then((result) => {
        fs.outputFile("_site/css/main.css", result.css, (err) => {
          if (err) throw err;
          console.log("CSS optimized");
        });
      });
  });
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
}