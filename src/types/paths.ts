/**
 * @file Type Definitions - Paths
 * @module tsconfig-types/types/Paths
 */

import type { MapLike } from '@flex-development/tutils'

/**
 * A series of entries which re-map imports to lookup locations.
 *
 * @see https://www.typescriptlang.org/tsconfig#paths
 */
type Paths = MapLike<string[]>

export type { Paths as default }
