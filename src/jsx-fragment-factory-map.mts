/**
 * @file JsxFragmentFactoryMap
 * @module tsconfig-types/JsxFragmentFactoryMap
 */

/**
 * Registry of JSX fragment factory functions.
 *
 * @see https://www.typescriptlang.org/tsconfig/#jsxFragmentFactory
 */
interface JsxFragmentFactoryMap {
  fragment: 'Fragment'
  reactFragment: 'React.Fragment'
}

export type { JsxFragmentFactoryMap as default }
