module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["import", "@typescript-eslint", "react", "prettier"],
  rules: {
    "import/no-unresolved": "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "arrow-parens": ["error"],
    "arrow-spacing": ["error"],
    camelcase: ["error"],
    "default-case": ["error"],
    "no-empty": ["error"],
    "no-redeclare": ["error"],
    "no-unused-vars": ["error"],
    "no-var": ["error"],
    "object-curly-spacing": ["error", "always"],
    "prefer-destructuring": ["error"],
    quotes: ["error", "double"],
    "space-before-function-paren": ["error"],
    "space-in-parens": ["error"],
    "spaced-comment": ["error"],
    "line-comment-position": ["error"],
    "prettier/prettier": ["error"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
