module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2018,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        "no-console": 1,
        "react/prop-types": [
            1,
            {
                ignore: ["className", "children", "location", "params", "location*"],
            },
        ],
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: "error",
        "arrow-body-style": 0,
        "react/prefer-stateless-function": 1,
        "no-unused-vars": 1,
    },
    overrides: [
        {
            files: ["**/*.spec.js", "**/*.spec.jsx", "**/*.test.js", "**/*.test.jsx"],
            env: {
                jest: true,
            },
        },
    ],
};
