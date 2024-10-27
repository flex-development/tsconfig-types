/**
 * @file Lib
 * @module tsconfig-types/Lib
 */

import type { LibMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered library names.
 *
 * To register new libraries, augment {@linkcode LibMap}. They will be added to
 * this union automatically.
 */
type Lib = LibMap[keyof LibMap]

export type { Lib as default }
