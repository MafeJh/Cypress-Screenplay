const { defineConfig } = require("cypress");
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler(
        {
        plugins: [createEsbuildPlugin(config)],
      }));

      return config;
    }
  },
});
