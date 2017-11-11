module.exports = {

    // Set aribnb rules as default (community standard as of 09/2017)
    extends: 'airbnb-base',

    // use eslint as a parser
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
        codeFrame: true,
        // Enable  ES2017
        ecmaVersion: 8,
    },

    // Enable plugins for extra checks.
    plugins: [
        // Resolving module imports (instead of requires)
        'import',
        'jsdoc',
    ],

    rules: {// 0 = off, 1 = warn, 2 = error

        // ------------------------------------------------------------------------ Errors

        'import/no-unresolved': 'error', // modules must be correctly resolved.
        curly: ['error', 'multi-or-nest'], // Be flexible yet constant with curly braces.
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoredNodes: ['JSXElement', 'JSXElement *'],
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
        }],

        // ---------------------------------------------------------------------- Warnings

        semi: 'warn', // Semicolons are a necessary evil for readability
        'comma-dangle': 'warn', // trailing commas are desired for CVS
        'func-names': 'warn', // function names help debugging.
        'key-spacing': 'warn', // these allow to read much better properties.
        'spaced-comment': 'warn', // better comment readability
        'space-before-blocks': 'warn', // another readability enhancement.
        'object-curly-spacing': 'warn',
        'space-infix-ops': 'warn',
        'jsdoc/check-param-names': 'warn', // all jsdoc related keys are desirable only
        'jsdoc/check-tag-names': 'warn',
        'jsdoc/check-types': 'warn',
        'jsdoc/newline-after-description': 'warn',
        'jsdoc/require-hyphen-before-param-description': 'warn',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-returns-description': 'warn',
        'jsdoc/require-param': 'warn',
        'jsdoc/require-param-type': 'warn',
        'jsdoc/require-returns-type': 'warn',

        // ---------------------------------------------------------------------- Disabled

        'import/no-named-as-default': 'off', // Allow module vars to have any name
        'import/no-extraneous-dependencies': 'off', // Allow using dev-dependencies
        'import/extensions': 'off', // Don't enforce the use of extensions on imports
        'prefer-arrow-callback': 'off', // plain functions will do when not returning
        'space-before-function-paren': 'off', // This doesn't enhace readability
        'padded-blocks': 'off', // having some space sometimes helps readability
        'no-confusing-arrow': 'off', // what's confusing about a ternary? c'mon!
        'function-paren-newline': 'off', // sometimes its needed for readabiity.
        'no-plusplus': 'off', // Aww c'mon man, I like using it.
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-example': 'off', // there aren't always examples needed.

    },
};
