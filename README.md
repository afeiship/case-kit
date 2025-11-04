# case-kit
> Convert strings between camel, snake, kebab, pascal, and other cases.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/case-kit
```

## usage
```js
import CaseKit from '@jswork/case-kit';

// Convert to camelCase
CaseKit.camelCase('change_format_to_this'); 
// Output: 'changeFormatToThis'

// Convert to snake_case
CaseKit.snakeCase('changeFormatToThis'); 
// Output: 'change_format_to_this'

// Convert to kebab-case
CaseKit.kebabCase('ChangeFormatToThis'); 
// Output: 'change-format-to-this'

// Convert to PascalCase
CaseKit.pascalCase('change_format_to_this'); 
// Output: 'ChangeFormatToThis'

// Convert to CONSTANT_CASE
CaseKit.constantCase('changeFormatToThis'); 
// Output: 'CHANGE_FORMAT_TO_THIS'

// Convert to dot.case
CaseKit.dotCase('changeFormatToThis'); 
// Output: 'change.format.to.this'

// Convert to path/case
CaseKit.pathCase('changeFormatToThis'); 
// Output: 'change/format/to/this'

// Convert to sentence case
CaseKit.sentenceCase('CHANGE_FORMAT_TO_THIS'); 
// Output: 'Change format to this'

// Convert to Title Case
CaseKit.titleCase('change_format_to_this'); 
// Output: 'Change Format To This'
```

## license
Code released under [the MIT license](https://github.com/afeiship/case-kit/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/case-kit
[version-url]: https://npmjs.org/package/@jswork/case-kit

[license-image]: https://img.shields.io/npm/l/@jswork/case-kit
[license-url]: https://github.com/afeiship/case-kit/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/case-kit
[size-url]: https://github.com/afeiship/case-kit/blob/master/dist/case-kit.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/case-kit
[download-url]: https://www.npmjs.com/package/@jswork/case-kit
