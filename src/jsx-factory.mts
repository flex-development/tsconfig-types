/**
 * @file JsxFactory
 * @module tsconfig-types/JsxFactory
 */

import type { JsxFactoryMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered JSX factory functions.
 *
 * To register new factories, augment {@linkcode JsxFactoryMap}. They will be
 * added to this union automatically.
 */
type JsxFactory = JsxFactoryMap[keyof JsxFactoryMap]

export type { JsxFactory as default }
