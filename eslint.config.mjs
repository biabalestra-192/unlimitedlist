import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: ".",
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ["eslint.config.mjs", "node_modules", "dist", "**/*.spec.js"],
    },
    ...compat.extends(
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),
    {
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "module",
        },

        rules: {
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/ban-types": "off",
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                },
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "all",
                    argsIgnorePattern: "^_[^_]?",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_[^_]?",
                    destructuredArrayIgnorePattern: "^_[^_]?",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
];
