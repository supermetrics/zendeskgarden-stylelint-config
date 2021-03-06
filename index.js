/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  extends: [
    './rules/possible-errors/color',
    './rules/possible-errors/font-family',
    './rules/possible-errors/function',
    './rules/possible-errors/string',
    './rules/possible-errors/unit',
    './rules/possible-errors/shorthand-property',
    './rules/possible-errors/property',
    './rules/possible-errors/keyframe-declaration',
    './rules/possible-errors/declaration-block',
    './rules/possible-errors/block',
    './rules/possible-errors/selector',
    './rules/possible-errors/media-feature',
    './rules/possible-errors/at-rule',
    './rules/possible-errors/comment',
    './rules/possible-errors/general',
    './rules/limit-language-features/alpha-value',
    './rules/limit-language-features/hue',
    './rules/limit-language-features/color',
    './rules/limit-language-features/function',
    './rules/limit-language-features/keyframes',
    './rules/limit-language-features/number',
    './rules/limit-language-features/time',
    './rules/limit-language-features/unit',
    './rules/limit-language-features/value',
    './rules/limit-language-features/custom-property',
    './rules/limit-language-features/property',
    './rules/limit-language-features/declaration',
    './rules/limit-language-features/declaration-block',
    './rules/limit-language-features/selector',
    './rules/limit-language-features/media-feature',
    './rules/limit-language-features/custom-media',
    './rules/limit-language-features/at-rule',
    './rules/limit-language-features/comment',
    './rules/limit-language-features/general',
    './rules/stylistic-issues/color',
    './rules/stylistic-issues/font-family',
    './rules/stylistic-issues/font-weight',
    './rules/stylistic-issues/function',
    './rules/stylistic-issues/number',
    './rules/stylistic-issues/string',
    './rules/stylistic-issues/length',
    './rules/stylistic-issues/unit',
    './rules/stylistic-issues/value',
    './rules/stylistic-issues/value-list',
    './rules/stylistic-issues/custom-property',
    './rules/stylistic-issues/property',
    './rules/stylistic-issues/declaration',
    './rules/stylistic-issues/declaration-block',
    './rules/stylistic-issues/block',
    './rules/stylistic-issues/selector',
    './rules/stylistic-issues/selector-list',
    './rules/stylistic-issues/rule',
    './rules/stylistic-issues/media-feature',
    './rules/stylistic-issues/media-query-list',
    './rules/stylistic-issues/at-rule',
    './rules/stylistic-issues/comment',
    './rules/stylistic-issues/general',
    './plugins/stylelint-order'
  ]
};
