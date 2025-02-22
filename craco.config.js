const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
