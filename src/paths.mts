/**
 * @file Paths
 * @module tsconfig-types/Paths
 */

import type { MapLike } from '@flex-development/tsconfig-types'

/**
 * A series of entries which re-map imports to lookup locations.
 *
 * @see https://www.typescriptlang.org/tsconfig#paths
 * @see {@linkcode MapLike}
 */
type Paths = MapLike<string[]>

export type { Paths as default }
