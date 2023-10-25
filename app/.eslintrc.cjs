/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  plugins: [],

  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsConfigRootDir: ".",
    project: ["./tsconfig.json"],
  },

  rules: {
    // These off/not-configured-the-way-we-want lint rules we like & opt into
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],

    // These lint rules don't make sense for us but are enabled in the preset configs
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/restrict-template-expressions": "off",

    // This rule doesn't seem to be working properly
    "@typescript-eslint/prefer-nullish-coalescing": "off",
  },
};
