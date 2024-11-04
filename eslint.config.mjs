import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  // { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  ...tseslint.configs.recommended,
  // pluginJs.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
  },
  {
    files: ['src/utils/nextra/**/*).{js,mjs,cjs,ts}'],
    ...pluginJs.configs.recommended,
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        exports: true,
        global: true,
        module: true,
        require: true,
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      'react/jsx-no-target-blank': 0,
      'react/display-name': 0,
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
]
