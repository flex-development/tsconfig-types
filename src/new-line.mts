/**
 * @file NewLine
 * @module tsconfig-types/NewLine
 */

import type { NewLineMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered options to specify the end of line sequence to be used
 * when emitting files.
 *
 * To register new module systems, augment {@linkcode NewLineMap}. They will be
 * added to this union automatically.
 */
type NewLine = NewLineMap[keyof NewLineMap]

export type { NewLine as default }
