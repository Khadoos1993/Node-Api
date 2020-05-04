module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": 0,
    quotes: [2, "double"],
    "no-console": 0,
    "comma-dangle": 0,
    "spaced-comment": 1,
    "func-names": 0,
    "operator-linebreak": 0,
    "no-underscore-dangle": 0,
  },
};
