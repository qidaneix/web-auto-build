/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  // parserOptions: {
  //   sourceType: 'module',
  // },
  rules: {
    "import/extensions": ["error", "ignorePackages"]
  }
};
