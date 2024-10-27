/**
 * @file JsxImportSource
 * @module tsconfig-types/JsxImportSource
 */

import type { JsxImportSourceMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered JSX import sources.
 *
 * To register new import sources, augment {@linkcode JsxImportSourceMap}. They
 * will be added to this union automatically.
 */
type JsxImportSource = JsxImportSourceMap[keyof JsxImportSourceMap]

export type { JsxImportSource as default }
