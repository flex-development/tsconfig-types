/**
 * @file Type Definitions - WatchDirectory
 * @module tsconfig-types/types/WatchDirectory
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * Directory watching strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-watchDirectory
 */
type WatchDirectory = OrLowercase<
  | 'dynamicPriorityPolling'
  | 'fixedChunkSizePolling'
  | 'fixedPollingInterval'
  | 'useFsEvents'
>

export type { WatchDirectory as default }
