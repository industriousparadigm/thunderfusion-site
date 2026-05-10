// Flat config built directly on @next/eslint-plugin-next + typescript-eslint.
// The eslint-config-next package has a FlatCompat circular-ref issue in v16,
// so we wire the rules manually here.
import nextPlugin from '@next/eslint-plugin-next'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['.next/**', 'node_modules/**', 'coverage/**', 'public/**', '.lighthouseci/**']
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
        plugins: {
            '@next/next': nextPlugin
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            // tsc handles unused-vars more accurately and the test file passes
            // an `any` to the next/image mock that would trigger the rule.
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
        },
        languageOptions: {
            globals: {
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                console: 'readonly',
                process: 'readonly',
                URL: 'readonly',
                fetch: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                requestAnimationFrame: 'readonly',
                Element: 'readonly',
                HTMLElement: 'readonly',
                IntersectionObserver: 'readonly',
                IntersectionObserverEntry: 'readonly',
                React: 'readonly'
            }
        }
    }
)
