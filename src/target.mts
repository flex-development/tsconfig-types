/**
 * @file Target
 * @module tsconfig-types/Target
 */

import type { TargetMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered ECMAScript targets.
 *
 * To register new targets, augment {@linkcode TargetMap}. They will be added to
 * this union automatically.
 */
type Target = TargetMap[keyof TargetMap]

export type { Target as default }
