import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'@typescript-eslint': typescript,
			unicorn: unicorn,
			import: importPlugin,
			stylistic: stylisticJs,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			...typescript.configs['recommended-type-checked'].rules,
			...typescript.configs['stylistic-type-checked'].rules,
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
			],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-misused-promises': [
				'error',
				{ checksVoidReturn: { attributes: false } },
			],
			'unicorn/filename-case': [
				'error',
				{ case: 'camelCase', ignore: ['next-env.d.ts', 'open-next.config.ts', 'not-found.tsx'] },
			],
			'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
			'stylistic/eol-last': ['error', 'always'],
		},
	},
]

export default eslintConfig;
