module.exports = {
  rules: {
    "no-console": 0,
    // "no-shadow": 0,
    //   "consistent-return": "off",
    //   "prefer-destructuring": 1,
    "no-undef": 1,
    "no-multi-assign": "1",
    "no-param-reassign": "2",
    "no-use-before-define": "1",
    "no-unused var": "off",
    "max-len": "0",
    camelcase: 0,
    radix: 0,
    "no-unused-expressions": 0
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true
  },
  parser: "babel-eslint",
  extends: ["airbnb-base"]
};
