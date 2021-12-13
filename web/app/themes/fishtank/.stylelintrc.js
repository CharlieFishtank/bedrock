module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
      'indentation': 'tab',
      'string-quotes': 'single',
      'max-empty-lines': 2,
      'no-empty-source': null,
      'selector-pseudo-element-colon-notation': null,
      'declaration-colon-newline-after': null,
      'value-list-comma-newline-after': null,
      'no-descending-specificity': null,
      'font-family-no-missing-generic-family-keyword': null,
      'rule-empty-line-before': null,
      'declaration-empty-line-before': null,
      'at-rule-empty-line-before': null,
      'no-eol-whitespace': null,
      'no-duplicate-selectors': null,
      'no-missing-end-of-source-newline': null,
      'selector-list-comma-newline-after': null,
      'at-rule-no-unknown': [
          true,
          {
              ignoreAtRules: [
                  'extend',
                  'at-root',
                  'debug',
                  'warn',
                  'error',
                  'if',
                  'else',
                  'for',
                  'each',
                  'while',
                  'mixin',
                  'include',
                  'content',
                  'return',
                  'function',
                  'tailwind',
                  'apply',
                  'responsive',
                  'variants',
                  'screen',
              ],
          },
      ],
  },
};