/**
 * @file JsxFragmentFactory
 * @module tsconfig-types/JsxFragmentFactory
 */

import type { JsxFragmentFactoryMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered JSX fragment factory functions.
 *
 * To register new factories, augment {@linkcode JsxFragmentFactoryMap}. They
 * will be added to this union automatically.
 */
type JsxFragmentFactory = JsxFragmentFactoryMap[keyof JsxFragmentFactoryMap]

export type { JsxFragmentFactory as default }
