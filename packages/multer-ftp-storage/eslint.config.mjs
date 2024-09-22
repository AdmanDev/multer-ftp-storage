// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"
import jsdoc from "eslint-plugin-jsdoc"

export default tseslint.config(
	{
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
		],
		plugins: {
			"@stylistic": stylistic,
			jsdoc,
		},
		rules: {
			"@stylistic/semi": ["error", "never"],
			"@stylistic/comma-spacing": [
				"error",
				{
					before: false,
					after: true
				}
			],
			"@stylistic/comma-style": ["error", "last"],
			"@stylistic/dot-location": ["error", "property"],
			"@stylistic/quotes": ["warn", "double"],
			"@stylistic/jsx-quotes": ["warn", "prefer-double"],
			"@stylistic/indent": [
				"warn",
				"tab",
				{
					"SwitchCase": 1,
					"MemberExpression": 1,
					"ArrayExpression": 1,
					"ObjectExpression": 1,
					"offsetTernaryExpressions": true,
					"FunctionDeclaration": {
						"parameters": "first"
					},
					"CallExpression": {
						"arguments": 1
					}
				}
			],
			"@stylistic/linebreak-style": "off",
			"camelcase": "warn",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"default-case": "warn",
			"default-case-last": "warn",
			"prefer-const": "warn",
			"@stylistic/implicit-arrow-linebreak": ["warn", "beside"],
			"default-param-last": "warn",
			"max-depth": ["warn", 4],
			"@stylistic/arrow-spacing": "warn",
			"@stylistic/block-spacing": ["warn", "always"],
			"@stylistic/brace-style": ["warn", "1tbs"],
			"@stylistic/computed-property-spacing": ["warn", "never"],
			"@stylistic/func-call-spacing": ["warn", "never"],
			"@stylistic/function-call-argument-newline": ["warn", "consistent"],
			"@stylistic/key-spacing": [
				"warn",
				{
					beforeColon: false,
					afterColon: true
				}
			],
			"@stylistic/keyword-spacing": "warn",
			"@stylistic/semi-spacing": [
				"warn",
				{
					before: false,
					after: true
				}
			],
			"@stylistic/semi-style": ["warn", "last"],
			"@stylistic/max-len": [
				"warn",
				{
					"code": 120,
					"tabWidth": 4,
					"ignoreComments": true,
					"ignoreTrailingComments": true,
					"ignoreUrls": true,
					"ignoreStrings": true,
					"ignoreTemplateLiterals": true,
					"ignoreRegExpLiterals": true
				}
			],
			"@stylistic/max-statements-per-line": [
				"warn",
				{
					"max": 1
				}
			],
			"@stylistic/no-multi-spaces": [
				"warn",
				{
					"ignoreEOLComments": false,
					"exceptions": {
						"VariableDeclarator": true,
						"ImportDeclaration": true,
						"ExportDeclaration": true,
						"Property": true
					}
				}
			],
			"no-empty": "error",
			"@stylistic/no-tabs": ["warn", { "allowIndentationTabs": true }],
			"@stylistic/no-multiple-empty-lines": [
				"warn",
				{
					"max": 1,
					"maxBOF": 0,
					"maxEOF": 0
				}
			],
			"@stylistic/no-trailing-spaces": ["warn", { "ignoreComments": true }],
			"@stylistic/no-whitespace-before-property": "warn",
			"@stylistic/object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": false }],
			"@stylistic/space-before-function-paren": ["warn", "never"],
			"@stylistic/space-in-parens": ["warn", "never"],
			"@stylistic/space-infix-ops": "warn",
			"@stylistic/space-unary-ops": [
				"warn",
				{
					"words": true,
					"nonwords": false
				}
			],
			"@stylistic/switch-colon-spacing": "warn",
			"@stylistic/template-tag-spacing": ["warn", "never"],
			"capitalized-comments": ["warn", "always"],

			// JSDoc
			...jsdoc.configs["flat/recommended-typescript"].rules,
			"jsdoc/require-jsdoc": [
				1,
				{
					"contexts": [
						"ClassDeclaration",
						"FunctionDeclaration",
						"FunctionExpression",
						"MethodDefinition"
					]
				}
			],
			"jsdoc/require-property-description": 1,
			"jsdoc/require-description": 1,
			"jsdoc/require-param-type": 1,
			"jsdoc/require-returns-type": 1,
			"jsdoc/no-types": 0,
			"jsdoc/no-blank-blocks": 1,
			"jsdoc/check-types": 1,

			"jsdoc/check-access": 1, // Recommended
			"jsdoc/check-alignment": 1, // Recommended
			"jsdoc/check-indentation": 1,
			"jsdoc/check-line-alignment": 1,
			"jsdoc/check-param-names": 1, // Recommended
			"jsdoc/check-template-names": 1,
			"jsdoc/check-property-names": 1, // Recommended
			"jsdoc/check-syntax": 1,
			"jsdoc/check-tag-names": 1, // Recommended
			"jsdoc/check-values": 1, // Recommended
			"jsdoc/empty-tags": 1, // Recommended
			"jsdoc/implements-on-classes": 1, // Recommended
			"jsdoc/match-description": 1,
			"jsdoc/multiline-blocks": 1, // Recommended
			"jsdoc/no-bad-blocks": 1,
			"jsdoc/no-blank-block-descriptions": 1,
			"jsdoc/no-defaults": 1,
			"jsdoc/no-multi-asterisks": 1, // Recommended
			"jsdoc/no-undefined-types": 1, // Recommended
			"jsdoc/require-asterisk-prefix": 1,
			"jsdoc/require-description-complete-sentence": 1,
			"jsdoc/require-hyphen-before-param-description": 1,
			"jsdoc/require-param": 1, // Recommended
			"jsdoc/require-param-description": 1, // Recommended
			"jsdoc/require-param-name": 1, // Recommended
			"jsdoc/require-property": 1, // Recommended
			"jsdoc/require-property-name": 1, // Recommended
			"jsdoc/require-property-type": 1, // Recommended
			"jsdoc/require-returns": 1, // Recommended
			"jsdoc/require-returns-check": 1, // Recommended
			"jsdoc/require-returns-description": 1, // Recommended
			"jsdoc/require-template": 1,
			"jsdoc/require-yields": 1, // Recommended
			"jsdoc/require-yields-check": 1, // Recommended
			"jsdoc/sort-tags": 1,
			"jsdoc/tag-lines": 1, // Recommended
			"jsdoc/valid-types": 1
		}
	}
)