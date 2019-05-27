module.exports = {
  "parserOptions": {
      "parser": "babel-eslint",
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "rules": {
      "semi": "error"
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
};