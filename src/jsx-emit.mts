/**
 * @file JsxEmit
 * @module tsconfig-types/JsxEmit
 */

import type { JsxEmitMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered options to control how JSX constructs are emitted.
 *
 * To register new options, augment {@linkcode JsxEmitMap}. They will be added
 * to this union automatically.
 */
type JsxEmit = JsxEmitMap[keyof JsxEmitMap]

export type { JsxEmit as default }
