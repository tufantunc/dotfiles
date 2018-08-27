module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "plugins": [
        "flowtype",
        "compat"
    ],
    "extends": [
        "airbnb-base",
        "plugin:flowtype/recommended"
    ],
    "rules": {
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "quote-props": [1, "consistent-as-needed"],
        "no-cond-assign": [2, "except-parens"],
        "radix": 0,
        "space-infix-ops": 0,
        "no-unused-vars": [1, {"vars": "local", "args": "none"}],
        "no-else-return": 0,
        "no-param-reassign": 0,
        "quotes": 0,
        "linebreak-style": [1, "windows"],
        "indent": [1, 4],
        "compat/compat": "error"
      }
};