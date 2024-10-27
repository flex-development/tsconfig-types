/**
 * @file JsxFactoryMap
 * @module tsconfig-types/JsxFactoryMap
 */

/**
 * Registry of JSX factory functions.
 *
 * @see https://www.typescriptlang.org/tsconfig/#jsxFactory
 */
interface JsxFactoryMap {
  h: 'h'
  reactCreateElement: 'React.createElement'
}

export type { JsxFactoryMap as default }
