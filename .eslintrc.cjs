module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    jest: true
  },
  extends: [
    "airbnb-typescript-prettier",
    "ts-react-important-stuff",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.{ts,tsx}"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "no-restricted-exports": "off",
    // Needed to avoid the error when importing an alias defined on the paths property on tsconfig.json file
    "import/no-unresolved": "off",
    // Ignore the rule on object destructuring
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }]
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: {
        // We want to disable this rule for test files because we want to use the dependencies on the parent package.json
        "import/no-extraneous-dependencies": "off"
      }
    },
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    },
    {
      files: ["*.cjs"],
      rules: {
        // Disable Typescript rules in cjs files
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
