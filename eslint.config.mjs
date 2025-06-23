import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import plugin from "eslint-plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const config = [
    ...compat.extends("next/core-web-vitals", "plugin:@typescript-eslint/recommended"),
    {
        plugins: {
            "@stylistic": stylistic,
            "react": plugin,
        },
    },
    {
        rules: {
            "@stylistic/quotes": [
                "error",
                "double",
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: true,
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],

            "import/order": [
                "error",
                {
                    "newlines-between": "always",

                    "alphabetize": {
                        order: "asc",
                    },

                    "groups": [
                        ["builtin", "external"],
                        ["internal", "parent", "sibling", "index"],
                        ["object", "type"],
                    ],

                    "pathGroups": [
                        {
                            pattern: "react",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "@components/**",
                            group: "internal",
                        },
                        {
                            pattern: "@utils/**",
                            group: "internal",
                        },
                        {
                            pattern: "@lib/**",
                            group: "internal",
                        },
                        {
                            pattern: "@i18n/**",
                            group: "internal",
                        },
                    ],
                },
            ],

            "import/prefer-default-export": ["off"],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            "react/jsx-curly-brace-presence": [
                "warn",
                {
                    props: "never",
                    children: "never",
                },
            ],

            "react/button-has-type": [
                "error",
                {
                    button: true,
                    submit: true,
                    reset: true,
                },
            ],

            "react/display-name": ["off"],
            "react/prop-types": ["off"],
            "react/static-property-placement": ["error", "static public field"],
            "quote-props": ["warn", "consistent-as-needed"],
            "no-case-declarations": ["off"],
            "no-async-promise-executor": ["off"],
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],

        rules: {
            "@typescript-eslint/no-shadow": "error",
            "no-shadow": "off",
            "no-undef": "off",
            "no-console": "error",
        },
    },
];

export default config;
