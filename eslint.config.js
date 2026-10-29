import js from "@eslint/js";
import { qwikEslint9Plugin } from "eslint-plugin-qwik";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: [
			"**/*.log",
			"**/.DS_Store",
			".vscode",
			".history",
			".yarn",
			"bazel-*",
			"dist",
			"dist-dev",
			"lib",
			"lib-types",
			"etc",
			"external",
			"node_modules",
			"public",
			"temp",
			"tmp",
			"tsc-out",
			"tsdoc-metadata.json",
			"target",
			"output",
			"build",
			".cache",
			".rollup.cache",
			"tsconfig.tsbuildinfo",
			"vite.config.ts",
			"*.spec.ts",
			"*.spec.tsx",
			".netlify",
			"server",
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...qwikEslint9Plugin.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
			globals: { ...globals.browser, ...globals.es2021, ...globals.node },
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: { jsx: true },
			},
		},
	},
	{
		rules: {
			// Carried over from the previous .eslintrc.cjs.
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			// typescript-eslint 8 replaced `ban-types` and `no-empty-interface`
			// with these; they were off before, so they stay off.
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unsafe-function-type": "off",
			"@typescript-eslint/no-wrapper-object-types": "off",
			"prefer-spread": "off",
			"no-case-declarations": "off",
			"no-console": "off",
			"@typescript-eslint/no-unused-vars": ["error"],
			"@typescript-eslint/consistent-type-imports": "warn",
			"@typescript-eslint/no-unnecessary-condition": "warn",
		},
	},
);
