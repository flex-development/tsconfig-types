/**
 * @file JsxEmitMap
 * @module tsconfig-types/JsxEmitMap
 */

/**
 * Registry of options to control how JSX constructs are emitted.
 *
 * @see https://www.typescriptlang.org/tsconfig/#jsx
 */
interface JsxEmitMap {
  /**
   * Emit `.jsx` files with the JSX unchanged.
   */
  preserve: 'preserve'

  /**
   * Emit `.js` files with JSX changed to the equivalent `React.createElement`
   * calls.
   */
  react: 'react'

  /**
   * Emit `.js` files with the JSX changed to `_jsx` calls optimized for
   * production.
   */
  reactJsx: 'react-jsx'

  /**
   * Emit `.js` files with the JSX changed to `_jsx` calls optimized for
   * development only.
   */
  reactJsxDev: 'react-jsxdev'

  /**
   * Emit `.js` files with the JSX unchanged.
   */
  reactNative: 'react-native'
}

export type { JsxEmitMap as default }
