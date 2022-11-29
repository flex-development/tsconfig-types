/**
 * @file Enums - JsxEmit
 * @module tsconfig-types/enums/JsxEmit
 */

import type { Jsx } from '#src/types'

/**
 * Controls how JSX constructs are emitted in JavaScript files.
 *
 * @see https://www.typescriptlang.org/tsconfig#jsx
 *
 * @enum {Lowercase<Jsx>}
 */
enum JsxEmit {
  Preserve = 'preserve',
  React = 'react',
  ReactJSX = 'react-jsx',
  ReactJSXDev = 'react-jsxdev',
  ReactNative = 'react-native'
}

export default JsxEmit
