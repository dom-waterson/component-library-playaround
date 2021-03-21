const path = require("path");

module.exports = async ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@/components": path.resolve(__dirname, "../components"),
    "@/styles": path.resolve(__dirname, "../styles"),
  };

  return config;
};
