module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/*', 'build/*', 'public/assets', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          tsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};

