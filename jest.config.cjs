const { resolve } = require("path");

const ROOT_PATH = resolve(__dirname);

module.exports = {
  verbose: true,
  rootDir: ".",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { rootMode: "upward" }]
  },
  testEnvironment: "jsdom",
  testRegex: "/.*/src/.*/tests/.*\\.test\\.(ts|tsx)$",
  moduleNameMapper: {
    "^@hv/app-shell$": `${ROOT_PATH}/packages/app-shell/src`
  }
};
